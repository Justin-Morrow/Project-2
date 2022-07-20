// Routes for whether or not the user is logged in 
const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.json(req.session);
});

router.get("/match", (req, res) =>{
    if(req.session.user){
        res.send(`Welcome to Doggie Date, ${req.session.user.username}!`)
    } else{
        res.status(401).send("You must login!");
    }
});

module.exports = router;