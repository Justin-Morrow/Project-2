const { User } = require('../models');

const userData = [
    {
        name: 'freddy',
        email: 'freddy@gmail.com',
        password: 'password123',
        dog_id: 1
    },
    {
        name: 'josue',
        email: 'josue@gmail.com',
        password: 'password123',
        dog_id: 2
    },
    {
        name: 'kuda',
        email: 'kuda@gmail.com',
        password: 'password123',
        dog_id: 3
    },
    {
        name: 'luis',
        email: 'luis@gmail.com',
        password: 'password123',
        dog_id: 4
    },
    {
        name: 'jose',
        email: 'jose@gmail.com',
        password: 'password123',
        dog_id: 5
    },
    {
        name: 'ricardo',
        email: 'ricardo@gmail.com',
        password: 'password123',
        dog_id: 6
    },
    {
        name: 'daniel',
        email: 'daniel@gmail.com',
        password: 'password123',
        dog_id: 7
    },
    {
        name: 'caleb',
        email: 'caleb@gmail.com',
        password: 'password123',
        dog_id: 8
    },
    {
        name: 'david',
        email: 'German Shepherd',
        password: 'password123',
        dog_id: 9
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;