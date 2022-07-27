// This works with the user's table. 
const express = require('express');
const router = express.Router();
// connecting with socket io-server
const io = require("../../server");
const { User, UserMatches, Lobby } = require('../../models');
const bcrypt = require("bcrypt");
// const { beforeDestroy } = require('../../models/Dog');
// const { route } = require('.');
// const { default: ModelManager } = require('sequelize/types/model-manager');
// const { Model } = require('sequelize/types');

// API routes


// Get landing page
router.get("/", (req, res) =>{
User.findAll().then(UserData =>{
    res.json({UserData});
}).catch(err =>{
    console.log(err);
    res.status(500).json(err);
})
});


// Get by ID 
router.get("/:id", (req, res) =>{
    User.findByPk(req.params.id).then(UserData =>{
        if(UserData){
            res.json({UserData})
        } else {
            res.status(404).json({err: "No user found"})
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({err});
    })
});

// CREATE USER API route
router.post("/", (req,res)=>{
    console.log(req.body, 'sign up user controller !!!!!!')
    User.create({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }).then(newUser => {
        req.session.user = {
            username: newUser.username,
            email: newUser.email,
            id: newUser.id
        }
        res.json({newUser});
    }).catch(err => {
        console.log(err);
        res.status(500).json({message: ""})
    })
})
//===============================================//

// login form route 
// router.post("/login", (req, res) =>{
//     console.log(req, "LOGIN USER CONTROLLER")
//     User.findOne({
//         where: {
//             email: req.body.email
//         }
//     }).then(foundUser =>{
//         console.log('FOUND USER',foundUser)
//         if(!foundUser){
//             req.session.destroy();
//             res.status(401).json({message: "Incorrect email or password"})
//         } else {
//             console.log("found user TRUE")
//             if (bcrypt.compareSync(req.body.password, foundUser.password)){

//                 req.session.save(() => {
//                     req.session.user = {
                    
//                         username: foundUser.username,
//                         email: foundUser.email,
//                         id: foundUser.id
//                     }
                    
//                   });
                
//                 res.json({foundUser})
//             } else {
//                 req.session.destroy();
//                 res.status(401).json({message: "Incorrect email or Password"})
//             }
//         }
//     }).catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     })
// });

router.post('/login', async (req, res) => {
    try {
      // Find the user who matches the posted e-mail address
      const userData = await User.findOne({ where: { email: req.body.email } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      // Verify the posted password with the password store in the database
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      // Create session variables based on the logged in user
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.loggedIn = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });
  


//=================================================//

// Get Logout page
router.get("/logout", (req, res) =>{
    req.session.destroy(()=> {
        res.json({msg: "session is closed"});
        res.redirect("/");
    })
});


// Update user route 
router.put("/:id", (req, res) =>{
    User.update({
        username: req.body.username,
        email: req.body.email,
        name: req.body.name,
        description: req.body.description,
        breed: req.body.breed,
        age: req.body.age,
        gender: req.body.gender,
        location: req.body.location
    }, {
        where: {
            id: req.params.id
        }
    }).then(updatedData =>{
        if(updatedData[0]) {
            res.json({updatedData});
        } else {
            res.status(404).json({err: "User not found"});
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({err});
    });
});

// Add a match route         check if / if is enough or if /lobby is needed
router.post("/", (req, res) =>{
    // add a friend - takes in sesion id and puts as user 1
    // takes in input user id and puts as user 2 - email 
    User.findOne({
        where: {
            email: req.body.email
        }
    });
});

module.exports = router;


