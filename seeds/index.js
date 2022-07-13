const seedBreeds = require('./breed-seeds');
const seedDogs = require('./dog-seeds')

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedBreeds();
  console.log('\n----- BREEDS SEEDED -----\n');

  await seedDogs();
  console.log('\n----- DOGS SEEDED -----\n');

  process.exit(0);
};

seedAll();