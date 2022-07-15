const router = require ('express').Router();

const apiRoutes = require('./api');
const sessionRoutes = require('./sessionRoutes');

router.use('/', sessionRoutes);
router.use('/api', apiRoutes);

module.exports = router;