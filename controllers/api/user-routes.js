//FOR LOGIN
const { router } = require("express");
const { User } = require('../../models')

//CREATE new user
router.post('/', async (req, res) => {
    try{
        const dbUserData = await User.create({ //CHANGE VARIABLE???????? //User??
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        //set up sessions with the "loggedIn" variable
        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json(dbUserData); // change variable?
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
        const dbUserData = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        if(!dbUserData) {
            res.status(400).json({message: 'Incorrect email or password'});
        }

        const validPassword = await dbUserData.checkPassword(req.body.password)

        if(!validPassword) {
            res.status(400).json({message: 'Incorrect email or password'})
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;
            res.status.json({user: dbUserData, message: "you are now logged in!"});
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
            req.status(204).end();
        });

    } else {
        res.status(404).end();
    }
});

module.exports = router;