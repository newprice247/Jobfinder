const { Schema, model } = require("mongoose");


const listingSchema = new Schema(
  {
    title: {
      type: String,
      required: "A valid title is required",
      minLength: 1,
      maxLength: 280,
    },
    description: {
      type: String,
      required: "A valid description is required",
      minLength: 1,
      maxLength: 280,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "category",
    },
    requirements: {
      type: String,
      required: "A valid requirements is required",
      minLength: 1,
      maxLength: 280,
    },
    location: {
      type: String,
      required: "A valid location is required",
      minLength: 1,
      maxLength: 280,
    },
    benefits: {
      type: String,
      required: "Valid benefits is required",
      minLength: 1,
      maxLength: 280,
    },
    salary: {
      type: String,
      required: "A valid salary is required",
      minLength: 1,
      maxLength: 280,
    },
    company: {
      type: String,
      required: "A valid company is required",
      minLength: 1,
      maxLength: 280,
    },
    contact: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    website: {
      type: String,
      required: "A valid website is required",
      minLength: 1,
      maxLength: 280,
    },
    savedBy: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);



listingSchema.virtual("savedByCount").get(function () {
    return this.savedBy.length;
    });

listingSchema.virtual("categoryCount").get(function () {
    return this.category.length;
    });

listingSchema.pre("remove", async function (next) {
  try {
    await this.model("user").updateOne(
      { _id: this.contact },
      { $pull: { contact: this._id } }
    );
    next();
  } catch (error) {
    console.error('Error in pre-remove middleware:', error);
    next(error);
  }
});

listingSchema.pre("remove", async function (next) {
    try {
        await this.model("user").updateMany(
            { _id: { $in: this.savedBy } },
            { $pull: { savedBy: this._id } }
        );
        next();
    } catch (error) {
        console.error('Error in pre-remove middleware:', error);
        next(error);
    }
});

listingSchema.pre("remove", async function (next) {
    try {
        await this.model("category").updateOne(
            { name: this.category },
            { $pull: { listings: this._id } }
        );
        next();
    } catch (error) {
        console.error('Error in pre-remove middleware:', error);
        next(error);
    }
});


listingSchema.pre("save", async function (next) {
    try {
        await this.model("category").updateOne(
            { _id: this.category },
            { $addToSet: { listings: this._id } },
            { new: true, runValidators: true }
        );
        next();
    } catch (error) {
        console.error('Error in pre-save middleware:', error);
        next(error);
    }
});

listingSchema.virtual("contactCount").get(function () {
  return this.contact.length;
});

const Listing = model("listing", listingSchema);

module.exports = Listing;
