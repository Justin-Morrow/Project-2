//import models
const User = require("./User");
const Lobby = require("./Lobby");
// const { AggregateError } = require('sequelize/types');
// const Dog = require('./Dog')



// create associations //UNCOMMENT only did this to check routes
// Dog.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// })
// User.hasMany(Dog, {
//     foreignKey: 'dog_id',
//     onDelete: 'CASCADE'
// });


module.exports = { User, Lobby };