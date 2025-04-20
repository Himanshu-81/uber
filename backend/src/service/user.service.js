import { User } from "../models/user.model.js";

export const createUser = async ({ firstname, lastname, email, password }) => {
  if (!firstname || !email || !password) {
    throw new Error("Missing required fields: firstname, email, password");
  }

  const createdUser = await User.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
  });

  return createdUser;
};
