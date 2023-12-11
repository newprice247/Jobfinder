const { User } = require('../models');

const { signToken } = require('../utils/auth');

module.exports = {
    async getUsers(req, res) {
        const users = await User.find()
        res.json(users);
    },
    async getMe({ user = null, params }, res) {
        const foundUser = await User.findOne({
            $or: [{ _id: user ? user._id : params.id }, { username: params.username }]
        }
        );
        if (!foundUser) {
            return res.status(400).json({ message: 'Cannot find a user with this id!' });
        }
        res.json(foundUser);
    },
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId } ).populate('listings')
            if (user) {
                res.json(user)
            } else {
                return res.json({ message: 'Sorry no user found with that ID' })
            }
        }
        catch (err) {
            res.json(err)
        }
    },
    async createUser({ body }, res) {
        const user = await User.create(body);
        if (!user) {
            return res.status(400).json({ message: 'Something is wrong!' });
        }
        const token = signToken(user);
        res.json({ token, user });
    },
    async updateUser({ params, body }, res) {
        const updatedUser = await User.findOneAndUpdate(
            { _id: params.userId },
            { $set: body },
            { new: true, runValidators: true }
        );
        if (!updatedUser) {
            return res.status(400).json({ message: "Couldn't find user with this id!" });
        }
        return res.json(updatedUser);
    },
    async updateUserResume ({ params, body }, res) {
        const updatedUser = await User.findOneAndUpdate(
            { _id: params.userId },
            { $set:  body },
            { new: true, runValidators: true }
        );
        if (!updatedUser) {
            return res.status(400).json({ message: "Couldn't find user with this id!" });
        }
        return res.json(updatedUser);
    },
    async login({ body }, res) {
        const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
        if (!user) {
            return res.status(400).json({ message: "Can't find this user" });
        }
        const correctPw = await user.isCorrectPassword(body.password);
        if (!correctPw) {
            return res.status(400).json({ message: 'Wrong password!' });
        }
        const token = signToken(user);
        res.json({ token, user });
    },
    async saveListing({params}, res) {
        console.log('here is the server controller', params.userId, params.listingId)
        const updatedUser = await User.findOneAndUpdate(
            { _id: params.userId },
            { $addToSet: { savedListings: params.listingId } },
            { new: true, runValidators: true }
        );
        if (!updatedUser) {
            return res.status(400).json({ message: "Couldn't find user with this id!" });
        }
        return res.json(updatedUser);
    },

};


