const mongoose = require("mongoose");
const Task = require("./tasks");
const argon2 = require("argon2");

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
      unique: true,
      require: true,
    },
    password: {
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

// Add cascade delete for tasks when user is deleted
UserSchema.post("findOneAndDelete", async function (res, next) {
  await Task.deleteMany({ author: res._id });
  next();
});

UserSchema.pre("save", async function (next, opt) {
  // Only hash password if it was modified
  if (!this.isModified("password")) {
    return next();
  }

  try {
    // Hash password using argon2
    const hashedPassword = await argon2.hash(this.password);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
