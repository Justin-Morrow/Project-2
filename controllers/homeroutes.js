const router = require('express').Router(); 
// const { Model } = require('sequelize/types'); // ERROR subpath './types' is not defined by "exports" !!!!!!!!
const { User } = require('../models');
// const withAuth = require('../utils/auth');

//============== Home Page get request ================
router.get("/", (req,res)=>{
    // homepage
    return res.render("home")
})

//===============LOGIN PAGE================//
router.get("/signup-login", (req,res)=>{
    if(req.session.loggedIn) {
        res.redirect('/profile');
        return;
    }
    // sign-up and login
    res.render("signup-login")
})
//============== PROFILE get request ================


router.get('/profile', async (req, res) => { //add with auth
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password'] },
            include: [{ model: User }], //??????
        });
        
        const user = userData.get({ plain: true });  // TypeError: Cannot read properties of null (reading 'get')  //DOES NOT WORK UNLESS COMMENTED OUT, SOLVE

        res.render('profile', {
            ...user,  // user, //DOES NOT WORK UNLESS COMMENTED OUT, SOLVE
            loggedIn: true
        });
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});

//============== OLD LOBBY get request ================

// lobby page get request
// router.get("/lobby", (req,res)=>{
//     // if not logged in alert you need to log in
//     if(!req.session.user){
//         console.log("You need to login"); //MAKE AN ALERT OR PROMPT
//     }
//     // if you are logged in, go to the profile
//     User.findByPk(req.session.user.id).then(
//         userData => {
//             const hbsUser = userData.get({ plain: true });
//             console.log(hbsUser);
    
//             const strMatches = userData.matches_list;
//             const matchesArray = strMatches.split(" ");
//             hbsUser.match = [];
//             for(let i = 0; i < matchesArray.length; i++){
//                 if(i !== 0) {
//                     const matchID = matchesArray[i].split(",")[0];
//                     matchUsername = matchesArray[i].split(",")[1];
//                     const matchObj = {
//                         username: matchUsername, 
//                         id: matchID
//                     }
//                     hbsUser.match.push(matchObj);
//                 }
//             };
//             res.render("lobby", hbsUser); 
//         }
//     )
// });




router.get('/lobby', async (req, res) => { //add with auth
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password'] },
            // include: [{ model: User }],
        });
        
        const user = userData.get({ plain: true });  //DOES NOT WORK UNLESS COMMENTED OUT, SOLVE

        res.render('lobby', {
            user, //...user, //DOES NOT WORK UNLESS COMMENTED OUT, SOLVE
            loggedIn: true
        });
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});

//=============== LOBBY =================//

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