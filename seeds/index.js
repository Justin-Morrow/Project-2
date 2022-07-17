const seedUsers = require('./user-seeds');
const seedDogs = require('./dog-seeds')

const sequelize = require('../config/connection');



const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- Users SEEDED -----\n');

  await seedDogs();
  console.log('\n----- DOGS SEEDED -----\n');

  process.exit(0);
};

seedAll();