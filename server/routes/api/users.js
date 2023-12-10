const express = require('express');
const router = express.Router();
const {
    getUsers,
    getMe,
    getSingleUser,
    createUser,
    updateUser,
    login,
    saveListing,
    updateUserResume,
} = require('../../controllers/userControllers');

const { authMiddleware } = require('../../utils/auth');

// GET  /api/users

router.route('/').get(getUsers).post(createUser);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getMe)

router.route('/me/listings/:listingId').put(authMiddleware, saveListing);

router.route('/:userId').get(getSingleUser).put(updateUser)

router.route('/:userId/resume').put(updateUserResume)

router.route('/:userId/listings/:listingId').put(saveListing);

module.exports = router;