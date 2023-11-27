const express = require("express");
const router = express.Router();
const apiRouter = require('./api')
const path = require("path")

//APIs
router.use('/api', apiRouter)

router.use(express.static(path.join(__dirname, '../../client/dist')));

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

module.exports = router;