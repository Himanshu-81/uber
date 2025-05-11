import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

import { Captain } from "../models/captain.model.js";

import { BlackListToken } from "../models/blacklistToken.model.js";

export const authUser = async (req, res, next) => {
  const token =
    req.cookies.token || req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized Access" });
  }

  const isBlackListed = await BlackListToken.findOne({ token });

  if (isBlackListed) {
    return res.status(401).json({ message: "Unauthorized Access" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded._id);

    req.user = user;

    return next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized Access" });
  }
};

export const authCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.header["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(402).json({ message: "Unauthorized Access" });
  }

  const isBlackListed = await BlackListToken.findOne({ token });

  if (isBlackListed) {
    return res.status(401).json({ message: "Unauthorized Access" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const captain = await Captain.findById(decoded._id);

    if (!captain) {
      return res.status(401).json({ message: "Unauthorized Access" });
    }

    req.captain = captain;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized Access" });
  }
};
