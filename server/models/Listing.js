const { Schema, model } = require("mongoose");

const listingSchema = new Schema(
  {
    title: {
      type: String,
      required: "A valid title is required",
      minLength: 1,
      maxLength: 280,
    },
    category: {
      type: String,
      required: "A valid category is required",
      minLength: 1,
      maxLength: 280,
    },
    description: {
      type: String,
      required: "A valid description is required",
      minLength: 1,
      maxLength: 280,
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

listingSchema.pre("remove", async function (next) {
  await this.model("user").updateMany(
    { listings: this._id },
    { $pull: { listings: this._id } }
  );
  await this.model("user").updateMany(
    { savedListings: this._id },
    { $pull: { savedListings: this._id } }
  );
  next();
});

listingSchema.virtual("contactCount").get(function () {
  return this.contact.length;
});

const Listing = model("listing", listingSchema);

module.exports = Listing;
