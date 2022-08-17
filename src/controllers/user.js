import User from "../models/tables/User";

export const createUser = async (req, res, next) => {
  try {
    const { firstName, lastName } = req.body;
    await User.create({ firstName, lastName });

    res.send(`New user: '${lastName}, ${firstName}' created`);
  } catch (error) {
    console.log("error:", error.message);
    res.send('Oops! something went wrong!')
  }
};
