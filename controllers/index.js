// const express = require('express');//
const router = require('express').Router(); 

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes)
router.use('/api', apiRoutes);


module.exports = router;

// log sessions
// router.get("/sessions", (req,res)=>{
//     res.json(req.session)
// })

// I commented out because it is not needed :)
// router.use((req,res) => {
//     res.send("<h1>Wrong Route!</h1>") //added in for check
// })
// router.use('/', sessionRoutes)
// const { restore } = require('../models/Dog');
// const sessionRoutes = require('./sessionRoutes');

//hello

