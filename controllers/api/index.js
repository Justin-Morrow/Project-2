// api controllers
const express = require('express');
const router = express.Router();

const userRoutes = require("./userController");
route.use("/users", userRoutes);

const lobbyRoutes = require("./lobbyController");
const { restore } = require('../../models/Dog');
const { response } = require('express');
route.use("/lobby", lobbyRoutes);

router.get("/", (req,res)=>{
    res.send("api...")
})



// I don't think the code below is needed -JM
// const dogRoutes = require('./dogRoutes');
// const { route } = require('./userRoutes');
// router.use('/users', userRoutes); //????
// router.use('/dogs', dogRoutes); 

// exporting router
module.exports = router;