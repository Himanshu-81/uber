import asyncHandler from "../utils/asyncHandler.js";

import { createCaptain } from "../service/captain.service.js";

import { Captain } from "../models/captain.model.js";
import { validationResult } from "express-validator";

import { BlackListToken } from "../models/blacklistToken.model.js";
import jwt from "jsonwebtoken";

const registerCaptain = asyncHandler(async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(401).json({ errors: errors.array() });
  }

  const { fullname, email, password, vehicle } = req.body;

  const existingCaptain = await Captain.findOne({
    email: email.toLowerCase(),
  });

  if (existingCaptain) {
    return res.status(409).json({
      status: "fail",
      message: "Captain already exists",
    });
  }

  const hashedPassword = await Captain.hashPassword(password);

  const captain = await createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });

  const token = captain.generateAuthToken();

  return res.status(201).json({
    status: "success",
    captain,
    token,
  });
});

const loginCaptain = asyncHandler(async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(401).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const existingCaptain = await Captain.findOne({
    email,
  }).select("+password");

  if (!existingCaptain) {
    return res.status(401).json({
      status: "fail",
      message: "Invalid email or password",
    });
  }

  const isMatch = await existingCaptain.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({
      status: "fail",
      message: "Invalid email or password",
    });
  }

  const token = existingCaptain.generateAuthToken();

  res.cookie("token", token);

  return res.status(200).json({
    status: "success",
    captain: existingCaptain,
    token,
    message: "Captain logged in successfully",
  });
});

const getCaptainProfile = asyncHandler(async (req, res) => {
  return res.status(200).json({
    status: "success",
    captain: req.captain,
    message: "Captain profile fetched successfully",
  });
});

const logoutCaptain = asyncHandler(async (req, res) => {
  const token =
    req.cookies.token || req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized Access" });
  }

  const isBlackListed = await BlackListToken.findOne({ token });

  if (isBlackListed) {
    console.log("Token is blacklisted", token);
    return res.status(401).json({ message: "Unauthorized Access" });
  }

  await BlackListToken.create({ token });

  res.clearCookie("token");

  return res.status(200).json({
    status: "success",
    message: "Captain logged out successfully",
  });
});

const verifyCaptain = asyncHandler(async (req, res) => {
  const token =
    req.cookies.token || req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized Access" });
  }

  const isBlackListed = await BlackListToken.findOne({ token });

  if (isBlackListed) {
    return res.status(401).json({ message: "Unauthorized Access" });
  }

  const decodedCaptain = jwt.verify(token, process.env.JWT_SECRET);

  if (!decodedCaptain) {
    return res.status(401).json({ message: "Invalid Token" });
  }

  return res.status(200).json({
    status: "success",
    data: decodedCaptain,
    message: "Captain verified successfully",
  });
});
export {
  registerCaptain,
  loginCaptain,
  getCaptainProfile,
  logoutCaptain,
  verifyCaptain,
};
