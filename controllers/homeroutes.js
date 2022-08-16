const router = require('express').Router(); 
const { User, Dog } = require('../models');
// const withAuth = require('../utils/auth');

//============== Home Page get request ================
router.get("/", (req,res)=>{
    // homepage
    return res.render("home")
})

//===============LOGIN PAGE================//

router.get('/signup-login', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/profile'); // '/' OR 'Profile'??????
        return;
    }
    
    res.render('signup-login');
});

//================== PROFILE get request ================//

// router.get('/profile', async (req, res) => {
//     console.log(req.session, "REQ SESSION=============")
//     try{
//         const dogData = await Dog.findAll({
            
//             include: [
//                 {
//                     model: User, //user because you want to know the username of whoever made the post
//                     attributes: ['username'],
//                 },
//             ],
//         });
//         //serialize data so template can read it
//         const dogs = dogData.map((dog) => {
//             return dog.get({ plain: true })
//         });
        
//         res.render('profile', { dogs, loggedIn: req.session.loggedIn });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

router.get('/profile', async (req, res) => {
    console.log(req.session)
    try{
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password'] },
            include: [{ model: Dog }],
        });
        console.log(userData)
        console.log(req.session.user_id)
        const user = userData.get({ plain: true});
        
        res.render('profile', { 
            ...user,
            loggedIn: true
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//========================= LOBBY =============================//

// router.get('/lobby', async (req, res) => { //add with auth
//     try {
//         const userData = await User.findByPk(req.session.user_id, {
//             attributes: {exclude: ['password'] },
//             // include: [{ model: User }],
//         });
        
//         const user = userData.get({ plain: true });  //DOES NOT WORK UNLESS COMMENTED OUT, SOLVE

//         res.render('lobby', {
//             user, //...user, //DOES NOT WORK UNLESS COMMENTED OUT, SOLVE
//             loggedIn: true
//         });
//     } catch (err) {
//         console.log(err)
//         res.status(500).json(err)
//     }
// });

// // Lobby-user-2 get request 
// router.get("/lobby-user-2", (req,res)=>{
//   // if not logged in alert you need to log in
//     if(!req.session.user){
//     alert("You need to login");
//     }
//     // if you are logged in, go to the profile
//     User.findByPk(req.session.user.id).then(
//         userData => {
//             const hbsUser = userData.get({ plain: true });
//             console.log(hbsUser);
//             res.render("lobby-user-2", hbsUser)
//             })
// });

//==============GET DOG=================//

router.get('/add-dog', (req, res) => {
    res.render('add-dog', {
        loggedIn: true
    })
});

 //=======================GET ONE DOG ===================//

 router.get('/edit/:id', async (req, res) => { // add with auth
    console.log(req, "REQ ==============!")
    try{
        const dogData = await Dog.findByPk(req.params.id, {
            // include: [
            //     {
            //         model: Comment,
            //         // attributes: ['comment_text'], //?
            //         include: {
            //             model: User,
            //             attributes: ["username"]
            //         }
            //     },
            //     {
            //         model: User,
            //         attributes: ["username"]
            //     },
            // ],
        });
        if (!dogData) {
            res.status(404).json({message: 'no post found with that ID'})
        };
        // const dog = dogData.get({ plain: true });
        // //checks to make sure user is logged in?
        // res.render('single-dog', { //single-dog??????
        //     ...dog,
        //     loggedIn: req.session.loggedIn 
        // })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// router.get('/:id', async (req, res) => { // add with auth
//     console.log(req, "REQ ==============!")
//     try{
//         const dogData = await Dog.findOne({
//             where: {
//                 id: req.params.id,
//             }
//         });
//         if(!dogData) {
//             res.status(404).json({ message: 'you cannot edit this post'});
//             return;
//         };

//         const dog = dogData.get({ plain: true });
//         res.render('single-dog', { //single-dog??????
//             ...dog,
//             loggedIn: true
//         });

//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

router.get('/single-dog/:id', async (req, res) => { // add with auth
    try{
        const dogData = await Dog.findByPk(req.params.id, {
            // include: [
            //     {
            //         model: Comment,
            //         // attributes: ['comment_text'], //?
            //         include: {
            //             model: User,
            //             attributes: ["username"]
            //         }
            //     },
            //     {
            //         model: User,
            //         attributes: ["username"]
            //     },
            // ],
        });

        const dog = dogData.get({ plain: true });
        //checks to make sure user is logged in?
        res.render('single-dog', {
            ...dog,
            loggedIn: req.session.loggedIn //loggedIn
        })

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;