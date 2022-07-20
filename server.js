const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
//store user cookies in database
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');
const routes = require('./controllers');
const { createServer } = require('http'); //??
const { Server } = require('socket.io'); 
// const path = require('path');
// const helpers = require('./utils/helpers');

// Setup Express App
const app = express(); 
const socketServer = require('./controllers/socketServer');
const httpServer = createServer(app);
// const io = new Server(httpServer);
// socketServer(io);

const PORT = process.env.PORT || 3000;
//require our models for syncing 
const { User, Lobby } = require('./models'); //Check if we need UserMatches in here

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
// sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static directory 
app.use(express.static('public'));

const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use("/", routes);

// Not needed
// app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync({ force: false }).then(function() {
    httpServer.listen(PORT, function() {
        console.log("Doggie Date App Listening on Port " + PORT);
    });
});
