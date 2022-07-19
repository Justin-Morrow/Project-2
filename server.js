const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
//store user cookies in database
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');

const { createServer } = require('http'); //??
const Server = require('socket.io'); 




// Setup Express App
const app = express(); 
const socketServer = require('./controllers/socketServer');
const httpServer = createServer(app);
// const io = new Server(httpServer);
// socketServer(io);

const PORT = process.env.PORT || 3000;

const hbs = exphbs.create({});

//require our models for syncing 
const { Dog, User } = require('./models');



//config for sessions on express server
const sess = {
    secret: process.env.SESSION_SECRET || "Super secret secret",
    // cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

//add middleware
app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// setup the express app to handle data parsing 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// static directory 
// app.use(express.static('public'));

app.use(routes);

sequelize.sync({ force: false }).then(function() {
    httpServer.listen(PORT, function() {
        console.log("Doggie Date App Listening on Port " + PORT);
    });
});
