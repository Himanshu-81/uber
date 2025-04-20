import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "First name at least 3 characters or long"],
    },

    lastname: {
      type: String,
      minlength: [3, "Last name at least 3 characters or long"],
    },
  },

  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },

  password: {
    type: String,
    required: true,
    select: false,
  },

  socketId: {
    type: String,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
    },
    process.env.JWT_SECRET
  );

  return token;
};

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

export const User = mongoose.model("User", userSchema);
