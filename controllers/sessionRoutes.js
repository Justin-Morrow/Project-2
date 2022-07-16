//homeroutes?

const router = require('express').Router();
const { Dog, User } = require('../models');
const withAuth = require('../utils/auth');

//prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => { // '/' or '/profile'
    try{
        const userData = await User.findAll({ //dogData? //find by pk
            attributes: { exclude: ['password'] },
            include: [{ model: Dog }],
        });

        const user = userData.map((dog) => dog.get({ plain: true }));

        res.render('homepage', { //profile?
            user,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => { //do not include custom middleware here to prevent user from getting into infinite loop
    if(req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;