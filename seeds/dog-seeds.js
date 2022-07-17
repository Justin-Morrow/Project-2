const { Dog } = require('../models');

const dogData = [
    {
        dog_name: 'Gunner',
        breed: 'German Shepherd',
        age: 3,
        location: 'seattle'
        
    },
    {
        dog_name: 'Ivy',
        breed: 'Golden Retriever',
        age: 2,
        location: 'seattle'
    },
    {
        dog_name: 'Thunder',
        breed: 'Husky',
        age: 7,
        location: 'seattle'
    },
    {
        dog_name: 'Blaze',
        breed: 'Chihuahua',
        age: 5,
        location: 'seattle' 
    },
    {
        dog_name: 'Hamilton',
        breed: 'Dobermann',//6
        age: 1,
        location: 'seattle'
    },
    {
        dog_name: 'Bongo',
        breed: 'Dachshund', //7
        age: 3,
        location: 'seattle'
    },
    {
        dog_name: 'Buddy',
        breed: 'Poddle',//8
        age: 5,
        location: 'seattle'
    },
    {
        dog_name: 'Franklin',
        breed: 'Corgy',//9
        age: 3,
        location: 'seattle'
    },
    {
        dog_name: 'Luna',
        breed: 'Shiba Inu',//10
        age: 6,
        location: 'boise'
    },
];

const seedDogs = () => Dog.bulkCreate(dogData);

module.exports = seedDogs;