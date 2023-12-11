const { Schema, model } = require("mongoose");

const categorySchema = new Schema(
    {
        name: {
            type: String,
            required: "A valid name is required",
            minLength: 1,
            maxLength: 280,
        },
        listings: [
            {
                type: Schema.Types.ObjectId,
                ref: "listing",
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

categorySchema.virtual("listingCount").get(function () {
    return this.listings.length;
});

categorySchema.pre("remove", async function (next) {
    await this.model("listing").updateMany(
      { category: this._id },
      { $pull: { category: this._id } }
    );
    next();
  });


const Category = model("category", categorySchema);

module.exports = Category;