const router = require('express').Router();
const userRoutes = require("./userController");
const lobbyRoutes = require("./lobbyController");
// const dogRoutes = require('/dogRoutes');

router.use("/users", userRoutes); // users is used in public js files
router.use("/lobby", lobbyRoutes);
// router.use('/dogs', dogRoutes);

module.exports = router;

// I don't think the code below is needed -JM
// const dogRoutes = require('./dogRoutes');
// const { route } = require('./userRoutes');
// router.use('/users', userRoutes); //????
// router.use('/dogs', dogRoutes); 
// const router = require('express').Router();
// const userRoutes = require('./userRoutes');
// const dogRoutes = require('./dogRoutes');
// router.use('/users', userRoutes); //????
// router.use('/dogs', dogRoutes); 
// const { restore } = require('../../models/Dog');
// const { response } = require('express');

