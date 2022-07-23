// Building Routes
const express = require('express');
const router = express.Router();
const frontEndRoutes = require('./frontEndRoutes');
<<<<<<< HEAD
router.use('/', frontEndRoutes);
=======

router.use("/", frontEndRoutes);
>>>>>>> 98dfc56bb62f43e30b2c5e2ffeaf158375580a43

module.exports = router;
