// Routes for whether or not the user is logged in 
<<<<<<< HEAD
const express = require('express');
const router = express.Router();
=======
const express = require("express");
const router = require('express').Router();
>>>>>>> 98dfc56bb62f43e30b2c5e2ffeaf158375580a43

router.get('/',(req,res)=>{
    res.json(req.session);
})

router.get("/match",(req,res)=>{
    if(req.session.user){
        res.send(`Welcome to dog date, ${req.session.user.username}!`)
    } else{
        res.status(401).send("You need to log in")
    }
})

module.exports = router;
