const { Breed } = require('../models');

const breedData = [
    
    {
        breed_name: 'German Shepherd'//1
    },
    {
        breed_name: 'Beagle'//2
    },
    {
        breed_name: 'Golden Retriever'//3
    },
    {
        breed_name: 'Husky'//4
    },
    {
        breed_name: 'Chihuahua'//5
    },
    {
        breed_name: 'Dobermann'//6
    },
    {
        breed_name: 'Dachshund'//7
    },
    {
        breed_name: 'Poddle'//8
    },
    {
        breed_name: 'Corgy'//9
    },
    {
        breed_name: 'Shiba Inu'//10
    },
]

const seedBreeds = () => Breed.bulkCreate(breedData);

module.exports = seedBreeds;
