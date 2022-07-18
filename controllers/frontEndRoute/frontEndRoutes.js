// Front End Routes
const express = require('express');
const { Model } = require('sequelize/types');
const router = express.Router(); 
const { Dog, User } = require('../../models');

// Home Page get request
router.get("/", (req,res)=>{
    // homepage
    return res.render("home")
})

// Profile Page get request
router.get("/profile", (req,res)=>{
    // if not logged in alert you need to log in
    if(!req.session.user){
        alert("You need to login");
    }
    // if you are logged in, go to the profile
    User.findByPk(req.session.user.id).then(
        userData => {
            const hbsUser = userData.get({ plain: true });
            const strMatches = userData.matches_list;
            const matchesArray = strMatches.split(" ");
            hbsUser.match = [];
            for(let i = 0; i < matchesArray.length; i++){
                if(i !== 0) {
                    const matchUsername = matchesArray[i].split(",")[1];
                    hbsUser.match.push(matchUsername);
                }
            };
            res.render("user", hbsUser); 
        }
    )
})

// lobby page get request
router.get("/lobby", (req,res)=>{
    // if not logged in alert you need to log in
    if(!req.session.user){
        alert("You need to login");
    }
    // if you are logged in, go to the profile
    User.findByPk(req.session.user.id).then(
        userData => {
            const hbsUser = userData.get({ plain: true });
            console.log(hbsUser);
    
            const strMatches = userData.matches_list;
            const matchesArray = strMatches.split(" ");
            hbsUser.match = [];
            for(let i = 0; i < matchesArray.length; i++){
                if(i !== 0) {
                    const matchID = matchesArray[i].split(",")[0];
                    matchUsername = matchesArray[i].split(",")[1];
                    const matchObj = {
                        username: matchUsername, 
                        id: matchID
                    }
                    hbsUser.match.push(matchObj);
                }
            };
            res.render("lobby", hbsUser); 
        }
    )
});

// Lobby-user-2 get request 
router.get("/lobby-user-2", (req,res)=>{
  // if not logged in alert you need to log in
    if(!req.session.user){
    alert("You need to login");
    }
    // if you are logged in, go to the profile
    User.findByPk(req.session.user.id).then(
        userData => {
            const hbsUser = userData.get({ plain: true });
            console.log(hbsUser);
            res.render("lobby-user-2", hbsUser)
            })
});

module.exports = router;


