const sequelize = require("../config/connection");
const { User } = require("../models");

const seed = async() =>{
  try {
    const userData = await User.bulkCreate([
      {
        "username": "Justin",
        "email": "justin@dogdate.com",
        "password": "password",
        "name": "Maluma",
        "breed": "Maltipoo",
        "age": 1,
        "gender": "Male",
        "location": "Seattle"
    },
    {
        "username": "David",
        "email": "David@dogdate.com",
        "password": "password",
        "name": "Shark",
        "breed": "Poodle",
        "age": 2,
        "gender": "Female",
        "location": "Seattle"
    },
    {
        "username": "Samira",
        "email": "Samira@dogdate.com",
        "password": "password",
        "name": "Claudia",
        "breed": "Chihuahua",
        "age": 3,
        "gender": "Female",
        "location": "Seattle"
    },
    {
        "username": "Dylan",
        "email": "Dylan@dogdate.com",
        "password": "password",
        "name": "Sofie",
        "breed": "Labrador",
        "age": 3,
        "gender": "Female",
        "location": "Seattle"
    },
    {
        "username": "Christina",
        "email": "Christina@dogdate.com",
        "password": "password",
        "name": "Bandit",
        "breed": "Labrador",
        "age": 5,
        "gender": "Male",
        "location": "Seattle"
    },
    ], {
      individualHooks: true
    })
  } catch(err){
    console.log(err);
    throw err;
  }
}

sequelize.sync({force: true}).then(() =>{
  seed();
});





// const seedUsers = require('./user-seeds');
// const seedDogs = require('./dog-seeds')

// const sequelize = require('../config/connection');



// const seedAll = async () => {
//   await sequelize.sync({ force: true });
//   console.log('\n----- DATABASE SYNCED -----\n');

//   await seedUsers();
//   console.log('\n----- Users SEEDED -----\n');

//   await seedDogs();
//   console.log('\n----- DOGS SEEDED -----\n');

//   process.exit(0);
// };

// seedAll();