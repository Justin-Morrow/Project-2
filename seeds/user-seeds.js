const { User } = require('../models');

const userData = [
    {
        username: 'freddy',
        email: 'freddy@gmail.com',
        password: 'password123',
        // dog_id: 1
    },
    {
        username: 'josue',
        email: 'josue@gmail.com',
        password: 'password123',
        // dog_id: 2
    },
    {
        username: 'kuda',
        email: 'kuda@gmail.com',
        password: 'password123',
        // dog_id: 3
    },
    {
        username: 'luis',
        email: 'luis@gmail.com',
        password: 'password123',
        // dog_id: 4
    },
    {
        username: 'jose',
        email: 'jose@gmail.com',
        password: 'password123',
        // dog_id: 5
    },
    {
        username: 'ricardo',
        email: 'ricardo@gmail.com',
        password: 'password123',
        // dog_id: 6
    },
    {
        username: 'daniel',
        email: 'daniel@gmail.com',
        password: 'password123',
        // dog_id: 7
    },
    {
        username: 'caleb',
        email: 'caleb@gmail.com',
        password: 'password123',
        // dog_id: 8
    },
    {
        username: 'david',
        email: 'German Shepherd',
        password: 'password123',
        // dog_id: 9
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;