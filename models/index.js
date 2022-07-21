//import models
const User = require("./User");
const Lobby = require("./Lobby");
// const { AggregateError } = require('sequelize/types');
// const Dog = require('./Dog')



// create associations //UNCOMMENT only did this to check routes
Lobby.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})
User.hasMany(Lobby, {
    foreignKey: 'dog_id',
    onDelete: 'CASCADE'
});


module.exports = { User, Lobby };