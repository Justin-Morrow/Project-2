// This works with the user's table. 
const express = require('express');
const router = express.Router();
// connecting with socket io-server
const io = require("../../server");
const { User, Lobby } = require('../../models');
const bcrypt = require("bcrypt");

// API routes


// Get landing page
router.get("/", (req, res) => {
    // Basic get Requests - get all
    User.findAll().then(UserData => {
        res.json({UserData})
    }).catch(err => {
        console.log(err)
        res.status(500).json(err);
    })
    });

<<<<<<< HEAD
// Get Logout page
router.get("/logout", (req, res) => {
    // User logout
    req.session.destroy();
    res.redirect("/login")
})
=======
>>>>>>> 98dfc56bb62f43e30b2c5e2ffeaf158375580a43

// Get by ID 
router.get("/:id", (req, res) => {
    // Basic get Requests - get one
    User.findByPk(req.params.id).then(UserData => {
        if (UserData) {
            res.json({UserData})
        } else {
            res.status(404).json({err:"No such user."});
        }
    }).catch(err => {
        console.log(err)
        res.status(500).json({err});
    })
    });

<<<<<<< HEAD
// Create a User API route
router.post("/", (req, res) => {
=======
// CREATE USER API route
router.post("/", (req,res)=>{
    console.log(req.body, 'REQ.BODY!!!!!!')
>>>>>>> 98dfc56bb62f43e30b2c5e2ffeaf158375580a43
    User.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    }).then(newUser => {
        req.session.user = {
            username: newUser.username,
            email: newUser.email,
            id: newUser.id
        }
        res.json({newUser});
    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: "User creation failed:", err: err })
    })
    });

// login form route 
router.post("/login", (req, res) => {
    // Login Form Route
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(foundUser => {
        if (!foundUser) {
            req.session.destroy()
            res.status(401).json({ message: "Incorrect email or password" })
        } else {
            if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                req.session.user = {
                    username: foundUser.username,
                    email: foundUser.email,
                    id: foundUser.id
                }
                res.json({foundUser})
            } else {
                req.session.destroy()
                res.status(401).json({ message: "Incorrect email or password" })
            }
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
    })

// Get Logout page
router.get("/logout", (req, res) =>{
    req.session.destroy(()=> {
        res.json({msg: "session is closed"});
        res.redirect("/");
    })
});


// Update user route 
router.put("/:id", (req, res) => {
    User.update({
        username: req.body.username,
        email: req.body.email,
        name: req.body.name,
        description: req.body.description,
        breed: req.body.breed,
        age: req.body.age,
        gender: req.body.gender,
        location: req.body.location,
    }, {
        where: {
            id: req.params.id
        }
    }).then(updatedData => {
        if (updatedData[0]) {
            res.json({updatedData});
        } else {
            res.status(404).json({ err: "no such user found!" });
        }
        })
        .catch(err => {
        console.log(err);
        res.status(500).json({ err });
        });
    })

// Add a match route         check if / if is enough or if /lobby is needed
router.post("/", (req, res) =>{
    // add a friend - takes in sesion id and puts as user 1
    // takes in input user id and puts as user 2 - email 
    User.findOne({
        where: {
            email: req.body.email
        }
    });
})

module.exports = router;


