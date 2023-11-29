const express = require('express');
const router = express.Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    login
} = require('../../controllers/userControllers');

const { authMiddleware } = require('../../utils/auth');


// GET  /api/users

router.route('/').get(getUsers).post(createUser);

router.route('/:id').get(getSingleUser);

router.route('/login').post(login);




module.exports = router;