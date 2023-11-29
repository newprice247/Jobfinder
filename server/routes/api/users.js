const express = require('express');
const router = express.Router();

const User = require('../../models/User');

// GET  /api/users

router.get('/', async (req, res) => {
    const users = await User.find({});
    res.json(users);
    });

// GET  /api/users/:id

router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
    });

//POST
router.post('/', async (req, res) => {
    const newUser = await User.create(req.body);
    res.json(newUser);
});

module.exports = router;