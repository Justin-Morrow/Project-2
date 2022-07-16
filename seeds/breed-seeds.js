const { Breed } = require('../models');

const breedData = [
    
    {
        breed: 'German Shepherd'//1
    },
    {
        breed: 'Beagle'//2
    },
    {
        breed: 'Golden Retriever'//3
    },
    {
        breed: 'Husky'//4
    },
    {
        breed: 'Chihuahua'//5
    },
    {
        breed: 'Dobermann'//6
    },
    {
        breed: 'Dachshund'//7
    },
    {
        breed: 'Poddle'//8
    },
    {
        breed: 'Corgy'//9
    },
    {
        breed: 'Shiba Inu'//10
    },
]

const seedBreeds = () => Breed.bulkCreate(breedData);

module.exports = seedBreeds;
