const express = require('express');
const router = require('express').Router(); 

// // front end handlebars work
// const frontEndRoutes = require('./frontEndRoutes');
// router.use("/", frontEndRoutes);

// back end sql work 
const apiRoutes = require('./api');
const sessionRoutes = require('./sessionRoutes');

router.use('/api', apiRoutes);
router.use('/', sessionRoutes)

const { restore } = require('../models/Dog');


// log sessions
router.get("/sessions", (req,res)=>{
    res.json(req.session)
})

// I commented out because it is not needed :)
// router.use((req,res) => {
//     res.send("<h1>Wrong Route!</h1>") //added in for check
// })

module.exports = router;