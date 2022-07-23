// Front End Routes
const express = require('express');
const router = express.Router();
const {User,Lobby} = require('../../models');

// Home Page get request
router.get("/",(req,res)=>{
    // Home Page
    return res.render("home")
})

// Profile Page Get Request
router.get("/profile",(req, res) => {
    // IF not logged in, return to login page
    if(!req.session.user){
        // return res.redirect("/")
    }
    // IF logged in, find user and render handblebars user page
    User.findByPk(req.session.user.id
    ).then(userData=>{
        const hbsUser = userData.get({plain:true});
        const strMatches = userData.matches_list;
        const matchesArr = strMatches.split(' ');
        hbsUser.match = [];
        for (let i = 0; i < matchesArr.length; i++) {
            if(i!==0){
                const matchUsername = matchesArr[i].split(',')[1];
                hbsUser.match.push(matchUsername);
            }
        };
        res.render('user',hbsUser);
    })
})

// Lobby Page Get Request
router.get("/lobby", (req,res)=>{
    User.findByPk(req.session.user.id,{
    }).then(userData=>{
        const hbsUser = userData.get({plain:true});
        console.log(hbsUser);
        const strMatches = userData.matches_list;
        const matchesArr = strMatches.split(' ');
        hbsUser.match = []
        for (let i = 0; i < matchesArr.length; i++) {
            if(i!==0){
                const matchID = matchesArr[i].split(',')[0];
                const matchUsername = matchesArr[i].split(',')[1];
                const matchObj = {
                    username: matchUsername,
                    id: matchID
                }
                hbsUser.match.push(matchObj);
            } 
            // else {
            //     console.log("array is undefined or null!!!!!")
            // }
        };
        res.render("lobby", hbsUser)
    })
});

router.get("/lobby-user-2", (req,res)=>{
    User.findByPk(req.session.user.id,{
    }).then(userData=>{
        const hbsUser = userData.get({plain:true});
        console.log(hbsUser);
        res.render("lobby-user-2", hbsUser)
    })
});

// Chat room Get Request
router.get("/chatroom", (req,res)=> {
    res.render("chat-room")
})



module.exports = router;


