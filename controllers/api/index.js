//api controllers
const express = require('express');
const router = express.Router();

const userRoutes = require("./userController");
router.use("/users", userRoutes);

const lobbyRoutes = require("./lobbyController");
route.use("/lobby", lobbyRoutes);

router.get("/", (req,res)=>{
    res.send("api...")
})

// exporting router
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

