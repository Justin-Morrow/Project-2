//import models
// const { AggregateError } = require('sequelize/types');
const Dog = require('./Dog')
const User = require('./User')


// create associations //UNCOMMENT only did this to check routes
// Dog.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// })
// User.hasMany(Dog, {
//     foreignKey: 'dog_id',
//     onDelete: 'CASCADE'
// });


module.exports = { User, Dog };