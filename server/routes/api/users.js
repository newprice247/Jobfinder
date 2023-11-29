const express = require('express');
const router = express.Router();
const {
    getUsers,
    getMe,
    getSingleUser,
    createUser,
    login
} = require('../../controllers/userControllers');

const { authMiddleware } = require('../../utils/auth');


// GET  /api/users

router.route('/').get(getUsers).post(createUser);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getMe);

router.route('/:userId').get(getSingleUser);




module.exports = router;