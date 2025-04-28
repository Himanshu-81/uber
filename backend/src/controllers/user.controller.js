import { User } from "../models/user.model.js";
import { createUser } from "../service/user.service.js";
import { validationResult } from "express-validator";
import asyncHandler from "../utils/asyncHandler.js";

import { BlackListToken } from "../models/blacklistToken.model.js";

const registerUser = asyncHandler(async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password } = req.body;

  const existingUser = await User.findOne({
    email: email.toLowerCase(),
  });

  if (existingUser) {
    return res.status(409).json({
      status: "fail",
      message: "User already exists",
    });
  }

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

const loginUser = asyncHandler(async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const existedUser = await User.findOne({ email }).select("+password");

  if (!existedUser) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isPasswordCorrect = await existedUser.comparePassword(password);
  if (!isPasswordCorrect) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = existedUser.generateAuthToken();

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });

  res.status(200).json({
    token,
    user: existedUser,
    message: "Login successfully",
  });
});

const logoutUser = asyncHandler(async (req, res) => {
  const token =
    req.cookies.token || req.headers["authorization"]?.split(" ")[1];

  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });

  console.log(token);

  const isAlreadyBlackListedToken = await BlackListToken.findOne({ token });

  console.log(isAlreadyBlackListedToken);

  // if (!isAlreadyBlackListedToken)
  const createdBlackListedToken = await BlackListToken.create({ token });

  console.log(createdBlackListedToken);

  res.status(200).json({
    message: "Logout successfully",
  });
});

const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({
    user: req.user,
    message: "User profile fetched successfully",
  });
});

export { registerUser, loginUser, getUserProfile, logoutUser };
