const { User } = require('../models');

const userData = [
    {
        username: 'freddy',
        email: 'freddy@gmail.com',
        password: 'password123',
    },
    {
        username: 'josue',
        email: 'josue@gmail.com',
        password: 'password123',
    },
    {
        username: 'kuda',
        email: 'kuda@gmail.com',
        password: 'password123',
    },
    {
        username: 'luis',
        email: 'luis@gmail.com',
        password: 'password123',
    },
    {
        username: 'jose',
        email: 'jose@gmail.com',
        password: 'password123',
    },
    {
        username: 'ricardo',
        email: 'ricardo@gmail.com',
        password: 'password123',
    },
    {
        username: 'daniel',
        email: 'daniel@gmail.com',
        password: 'password123',
    },
    {
        username: 'caleb',
        email: 'caleb@gmail.com',
        password: 'password123',
    },
    {
        username: 'david',
        email: 'German Shepherd',
        password: 'password123',
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;