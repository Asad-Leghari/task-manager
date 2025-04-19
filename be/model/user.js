const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      trim: true,
      require: [true, "First Name is required"],
    },
    lastname: {
      type: String,
      trim: true,
      require: [true, "Last Name is required"],
    },
    username: {
      type: String,
      require: true,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// Virtual field to populate tasks
UserSchema.virtual("tasks", {
  ref: "Task",
  localField: "_id",
  foreignField: "author",
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
