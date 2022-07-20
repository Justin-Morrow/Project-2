const express = require('express');
const router = require('express').Router(); 

// // front end handlebars work
const frontEndRoutes = require('./frontEndRoute');
router.use("/", frontEndRoutes);

// back end sql work 
const apiRoutes = require('./api');
router.use('/api', apiRoutes);

// log sessions
router.get("/sessions", (req,res)=>{
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

