//import models
const Breed = require('./Breed');
const Dog = require('./Dog')


//Dog belongsTo Breed
Dog.belongsTo(Breed, {
    foreignKey: 'breed_id',
    onDelete: 'CASCADE'
})
Breed.hasMany(Dog, {
    foreignKey: 'breed_id',
    // onDelete: 'CASCADE'
});


module.exports = { User, Breed, Dog };