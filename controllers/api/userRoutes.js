//FOR LOGIN
const router = require("express").Router();
const { User } = require('../../models')

//CREATE new user
router.post('/', async (req, res) => { // '/' or '/login'????
    try{
        const userData = await User.create({ //req.body? //User??
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        //set up sessions with the "loggedIn" variable
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.loggedIn = true;

            res.status(200).json(userData); // change variable?
        });
    }catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//login
router.post('/login', async (req, res) => {
    try {
        //add info here
        const userData = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        if(!userData) {
            res.status(400).json({message: 'Incorrect email or password'});
        }

        const validPassword = await userData.checkPassword(req.body.password)

        if(!validPassword) {
            res.status(400).json({message: 'Incorrect email or password'})
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id; //is needed??????
            req.session.loggedIn = true;

            res.status.json({user: userData, message: "you are now logged in!"});
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//logout
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