const { Schema, model } = require('mongoose');

const cardSchema = new Schema(
    {
        title: {
            type: String,
            required: 'A valid title is required',
            minLength: 1,
            maxLength: 280
        },
        subtitle: {
            type: String,
            required: 'A valid subtitle is required',
            minLength: 1,
            maxLength: 280
        },
        text: {
            type: String,
            required: 'A valid text is required',
            minLength: 1,
            maxLength: 280
        },
        link: {
            type: String,
            required: 'A valid link is required',
            minLength: 1,
            maxLength: 280
        },
        linkName: {
            type: String,
            required: 'A valid linkName is required',
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

const Card = model('card', cardSchema);

module.exports = Card;