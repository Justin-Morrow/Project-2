const router = require('express').Router();
const { User } = require('../../models');
// const bcrypt = require("bcrypt");
// const { beforeDestroy } = require('../../models/Dog');
// const { route } = require('.');
// const { default: ModelManager } = require('sequelize/types/model-manager');
// const { Model } = require('sequelize/types');
// const io = require("../../server");

// CREATE new user
router.post('/', async (req, res) => {
    try {
        console.log(req.body.username, 'REQ USERNAME')
        const userData = await User.create({ //newUser?
            // email: req.body.email,
            username: req.body.username,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.user_id = userData.id;
            // req.session.username = userData.username;
            req.session.loggedIn = true;

            res.status(200).json(userData) //newUser
        });
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
});




// router.post("/", (req,res)=>{
//     User.create({
//         email: req.body.email,
//         username: req.body.username,
//         password: req.body.password
//     }).then(newUser => {
//         req.session.user = {
//             username: newUser.username,
//             email: newUser.email,
//             id: newUser.id
//         }
//         res.json({newUser});
//     }).catch(err => {
//         console.log(err);
//         res.status(500).json({message: ""})
//     })
// })


// ================LOGIN================//

router.post('/login', async (req, res) => { //signup-login OR login?
    console.log('HEY !')
    try{
        console.log(userData)
        const userData = await User.findOne({ where: { username: req.body.username } });

        if (!userData) {
            console.log(userData)
            res.status(400).json({ message: "Incorrect username or password, please try again" })
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if(!validPassword) {
            res.status(400).json({ message: 'Incorrect username or password, please try again' })
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.loggedIn = true;

            res.json({ user: userData, message: 'You are now logged in' });
        });

    }catch (err) {
        res.status(400).json(err);
    }
});

// old login 

// router.post("/login", (req, res) =>{
//     User.findOne({
//         where: {
//             email: req.body.email
//         }
//     }).then(foundUser =>{
//         if(!foundUser){
//             req.session.destroy();
//             res.status(401).json({message: "Incorrect email or password"})
//         } else {
//             if (bcrypt.compareSync(req.body.password, foundUser.password)){
//                 req.session.user = {
//                     username: foundUser.username,
//                     email: foundUser.email,
//                     id: foundUser.id
//                 }
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


//=======================================//
// Update user route 
// router.put("/:id", (req, res) =>{
//     User.update({
//         username: req.body.username,
//         email: req.body.email,
//         name: req.body.name,
//         description: req.body.description,
//         breed: req.body.breed,
//         age: req.body.age,
//         gender: req.body.gender,
//         location: req.body.location
//     }, {
//         where: {
//             id: req.params.id
//         }
//     }).then(updatedData =>{
//         if(updatedData[0]) {
//             res.json({updatedData});
//         } else {
//             res.status(404).json({err: "User not found"});
//         }
//     }).catch(err => {
//         console.log(err);
//         res.status(500).json({err});
//     });
// });

// Add a match route  check if / if is enough or if /lobby is needed
// router.post("/", (req, res) =>{
//     // add a friend - takes in sesion id and puts as user 1
//     // takes in input user id and puts as user 2 - email 
//     User.findOne({
//         where: {
//             email: req.body.email
//         }
//     });
// });

//=============LOGOUT===========//

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;

// ================OLD CODE=================//
//Get landing page

// router.get("/", (req, res) =>{
// User.findAll().then(UserData =>{
//     res.json({UserData});
// }).catch(err =>{
//     console.log(err);
//     res.status(500).json(err);
// })
// });

// Get Logout page
// router.get("/logout", (req, res) =>{
//     req.session.destroy(()=> {
//         res.json({msg: "session is closed"});
//         res.redirect("/");
//     })
// });

// Get by ID 
// router.get("/:id", (req, res) =>{
//     User.findByPk(req.params.id).then(UserData =>{
//         if(UserData){
//             res.json({UserData})
//         } else {
//             res.status(404).json({err: "No user found"})
//         }
//     }).catch(err => {
//         console.log(err);
//         res.status(500).json({err});
//     })
// });



