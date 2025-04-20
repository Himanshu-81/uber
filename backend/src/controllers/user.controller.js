import { User } from "../models/user.model.js";
import { createUser } from "../service/user.service.js";
import { validationResult } from "express-validator";
import asyncHandler from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password } = req.body;

  const hashedpassword = await User.hashPassword(password);

  const user = await createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedpassword,
  });

  const token = user.generateAuthToken();

  res.status(200).json({
    token,
    user,
    message: "User created successfully",
  });
});

export { registerUser };
