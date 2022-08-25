import { createUser } from "../services/user";

export const storeUser = async (req, res, next) => {
  try {
    const data = req.body;
    const newUser = await createUser(data);

    res.send(`New user: '${newUser.lastName}' created`);
  } catch (error) {
    next(error);
  }
};
