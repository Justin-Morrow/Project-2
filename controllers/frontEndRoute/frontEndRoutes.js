//yooooooooooo
// Front End Routes
const express = require('express');
<<<<<<< HEAD
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

=======
// const { Model } = require('sequelize/types'); // ERROR subpath './types' is not defined by "exports" !!!!!!!!
const router = express.Router(); 
const { User } = require('../../models');

//============== Home Page get request ================
router.get("/", (req,res)=>{
    // homepage
    return res.render("home")
})

//============== PROFILE get request ================

// // Profile Page get request
// router.get("/profile", (req,res)=>{
//     // if not logged in alert you need to log in
//     if(!req.session.user){
//         alert("You need to login");
//     }
//     // if you are logged in, go to the profile
//     User.findByPk(req.session.user.id).then(
//         userData => {
//             const hbsUser = userData.get({ plain: true });
//             const strMatches = userData.matches_list;
//             const matchesArray = strMatches.split(" ");
//             hbsUser.match = [];
//             for(let i = 0; i < matchesArray.length; i++){
//                 if(i !== 0) {
//                     const matchUsername = matchesArray[i].split(",")[1];
//                     hbsUser.match.push(matchUsername);
//                 }
//             };
//             res.render("user", hbsUser); 
//             // res.render('user',hbsUser, {
//             //     loggedIn: req.session.loggedIn
//             // } )
//         }
//     )
// })





router.get('/profile', async (req, res) => { //add with auth
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password'] },
            raw: true,
            include: [{ model: User }], //??????
        });
    
        // const user = userData.get({ plain: true });  // TypeError: Cannot read properties of null (reading 'get')  //DOES NOT WORK UNLESS COMMENTED OUT, SOLVE
        console.log(userData)

        res.render('profile', {
            // ...user,  // user, //DOES NOT WORK UNLESS COMMENTED OUT, SOLVE
            loggedIn: req.session.loggedIn, //loggedIn: true
        });
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});

//============== LOBBY get request ================

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

router.get('/login', (req, res) => { //do not include custom middleware here to prevent user from getting into infinite loop
    if(req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signup-login');
});



router.get('/lobby', async (req, res) => { //add with auth
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password'] },
            include: [{ model: User }],
        });
        
        // const user = userData.get({ plain: true });  //DOES NOT WORK UNLESS COMMENTED OUT, SOLVE

        res.render('lobby', {
            // user, //...user, //DOES NOT WORK UNLESS COMMENTED OUT, SOLVE
            loggedIn: req.session.loggedIn, //loggedIn: true
        });
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});

//=============== LOBBY =================//

// Lobby-user-2 get request 
>>>>>>> 98dfc56bb62f43e30b2c5e2ffeaf158375580a43
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


