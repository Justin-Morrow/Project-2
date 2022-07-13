const { Dog } = require('../models');

const dogData = [
    {
        dog_name: 'Gunner',
        age: 3,
        breed_id: 6,
    },
    {
        dog_name: 'Ivy',
        age: 2,
        breed_id: 8,
    },
    {
        dog_name: 'Thunder',
        age: 7,
        breed_id: 9,
    },
    {
        dog_name: 'Blaze',
        age: 5,
        breed_id: 9,
    },
    {
        dog_name: 'Hamilton',
        age: 1,
        breed_id: 10,
    },
];

const seedDogs = () => Dog.bulkCreate(dogData);

module.exports = seedDogs;