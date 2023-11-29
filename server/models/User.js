const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: 'A valid name is required',
            minLength: 1,
            maxLength: 280
        },
        username: {
            type: String,
            required: 'A valid username is required',
            minLength: 1,
            maxLength: 280
        },
        email: {
            type: String,
            required: 'A valid email is required',
            minLength: 1,
            maxLength: 280
        },
        password: {
            type: String,
            required: 'A valid password is required',
            minLength: 1,
            maxLength: 280
        },
        phone: {
            type: String,
            required: 'A valid phone number is required',
            minLength: 1,
            maxLength: 280
        },
        listings: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Listing'
            }
        ],
        savedListings: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Listing'
            }
        ],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        },
        id: false

    }
)

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

userSchema
    .virtual('listingCount')
    .get(function () {
        return this.listings.length;
    });

const User = model('user', userSchema);

module.exports = User;