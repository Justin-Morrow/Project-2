const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
//store user cookies in database
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');
const { createServer } = require('http'); 
const Server = require('socket.io'); 

const helpers = require('./utils/helpers');
// const path = require('path');

// Setup Express App
const app = express(); 
const socketServer = require('./controllers/socketServer');
const httpServer = createServer(app);
const io = new Server(httpServer);
socketServer(io);

const PORT = process.env.PORT || 3000;

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
// setup the express app to handle data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static directory 
app.use(express.static('public'));

const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

sequelize.sync({ force: false }).then(function() {
    httpServer.listen(PORT, function() {
        console.log("Doggie Date App Listening on Port " + PORT);
    });
});
