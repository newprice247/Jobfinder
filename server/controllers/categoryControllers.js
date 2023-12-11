const { Category } = require('../models');

module.exports = {
    async getCategories(req, res) {
        const categories = await Category.find({})
        res.json(categories);
    },

    async getListingsByCategory({ params }, res) {
        const category = await Category.findOne({ name: params.name }).populate('listings')
        if (!category) {
            return res.status(400).json({ message: 'Cannot find a category with this name!' });
        }
        res.json(category);
    },
};