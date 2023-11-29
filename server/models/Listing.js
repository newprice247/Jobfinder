const { Schema, model } = require('mongoose');

const listingSchema = new Schema(
    {
        title: {
            type: String,
            required: 'A valid title is required',
            minLength: 1,
            maxLength: 280
        },
        description: {
            type: String,
            required: 'A valid description is required',
            minLength: 1,
            maxLength: 280
        },
        requirements: {
            type: String,
            required: 'A valid requirements is required',
            minLength: 1,
            maxLength: 280
        },
        location: {
            type: String,
            required: 'A valid location is required',
            minLength: 1,
            maxLength: 280
        },
        benefits: {
            type: String,
            required: 'Valid benefits is required',
            minLength: 1,
            maxLength: 280
        },
        salary: {
            type: String,
            required: 'A valid salary is required',
            minLength: 1,
            maxLength: 280
        },
        company: {
            type: String,
            required: 'A valid company is required',
            minLength: 1,
            maxLength: 280
        },
        contact: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        website: {
            type: String,
            required: 'A valid website is required',
            minLength: 1,
            maxLength: 280
        },
        },
    {
        toJSON: {
            getters: true,
            virtuals: true
        },
        id: false
    }
)

listingSchema
    .virtual('contactCount')
    .get(function () {
        return this.contact.length;
    });

const Listing = model('listing', listingSchema);

module.exports = Listing;