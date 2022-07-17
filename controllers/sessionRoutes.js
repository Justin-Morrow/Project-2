//homeroutes?

const router = require('express').Router();
const { Dog, User } = require('../models');
const withAuth = require('../utils/auth');

//profile, first thing after login and create user
router.get('/profile', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password'] },
            include: [{model: Dog}],
        });
        
        const user = userData.get({ plain: true });

        res.render('profile', {
            ...user,
            loggedIn: true 
        });
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});

//prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => { // '/' or '/profile'
    try{
        const userData = await User.findAll({ //dogData? //find by pk
            attributes: { exclude: ['password'] },
            include: [{ model: Dog }], //????????
        });

        const user = userData.map((dog) => dog.get({ plain: true })); //dog???

        res.render('homepage', { //profile?
            user,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => { //do not include custom middleware here to prevent user from getting into infinite loop
    if(req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;