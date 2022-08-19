import User from "../models/tables/User";

export const createUser = async (query) => {
  try {
    const newUser = await User.create(query);
    return newUser;

  } catch (error) {
    console.log("error: ", error);
  }
};
