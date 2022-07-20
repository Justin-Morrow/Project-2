//homeroutes?
const router = require('express').Router();
const { Dog, User } = require('../models');
// const withAuth = require('../utils/auth'); 

// Home Page get request
router.get("/", async (req,res)=>{
    // homepage
    res.render('home')
});

//prevent non logged in users from viewing the homepage
// router.get('/', async (req, res) => { // '/' or '/profile' ADD WithAuth
//     try{
//         const dogData = await Dog.findAll({ //find by pk or find all?
//             // attributes: { exclude: ['password'] },
//             include: [
//                 { 
//                     model: User,
//                     attributes: ['name']
//                 },
//             ], 
//         });

//         const dogs = dogData.map((dog) => dog.get({ plain: true })); //dog???

//         res.render('homepage', { //profile?
//             dogs,
//             loggedIn: req.session.loggedIn,
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });


//profile, first thing after login and create user
router.get('/profile', async (req, res) => { //add with auth
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password'] },
            include: [{ model: Dog }],
        });
        
        // const user = userData.get({ plain: true });  //DOES NOT WORK UNLESS COMMENTED OUT, SOLVE

        res.render('profile', {
            // user, //...user, //DOES NOT WORK UNLESS COMMENTED OUT, SOLVE
            loggedIn: req.session.loggedIn, //loggedIn: true
        });
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});



router.get('/login', (req, res) => { //do not include custom middleware here to prevent user from getting into infinite loop
    if(req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signup-login');
});

module.exports = router;