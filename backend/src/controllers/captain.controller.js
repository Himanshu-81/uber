import mongoose from "mongoose";
import asyncHandler from "../utils/asyncHandler.js";

import { createCaptain } from "../service/captain.service.js";

import { Captain } from "../models/captain.model.js";
import { validationResult } from "express-validator";

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

export { registerCaptain };
