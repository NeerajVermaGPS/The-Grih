const express = require('express');
const router = express.Router();
const newsletterRoutes = require("./newsletterRoutes");
require("../config/dotenvconfig")

router.use('/newsletter', newsletterRoutes);

router.get('/', (req, res) => {
    res.send('Restarting Server!');
    });

module.exports = router;