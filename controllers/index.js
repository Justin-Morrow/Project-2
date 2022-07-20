const express = require('express');
const router = express.Router();

// Front End Handlebars Work
const frontEndRoutes = require("./frontEndRoute");
router.use("/", frontEndRoutes);

// Back End SQL Work
const apiRoutes = require("./api");
router.use("/api", apiRoutes);

// Log sessions
router.get("/sessions",(req,res)=>{
    res.json(req.session)
})

module.exports = router;

// I commented out because it is not needed :)
// router.use((req,res) => {
//     res.send("<h1>Wrong Route!</h1>") //added in for check
// })
// router.use('/', sessionRoutes)
// const { restore } = require('../models/Dog');
// const sessionRoutes = require('./sessionRoutes');

