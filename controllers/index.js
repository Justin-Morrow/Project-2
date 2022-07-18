const router = require ('express').Router();

const apiRoutes = require('./api');
const sessionRoutes = require('./sessionRoutes');

router.use('/', sessionRoutes); //profile?
router.use('/api', apiRoutes);

router.use((req,res) => {
    res.send("<h1>Wrong Route!</h1>") //added in for check
})

module.exports = router;