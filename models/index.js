//import models
const User = require("./User");
const Lobby = require("./Lobby");
// const { AggregateError } = require('sequelize/types');
// const Dog = require('./Dog')



// create associations //UNCOMMENT only did this to check routes
User.hasMany(Lobby, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Lobby.belongsTo(User, {
    foreignKey: 'user_id',
    // onDelete: 'CASCADE'
})



module.exports = { User, Lobby };