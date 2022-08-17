import Client from "../models/tables/Client";

export const createClient = async (req, res, next) => {
  try {
    const { businessName, cuit, owner, franchises } = req.body;
    await Client.create({ businessName, cuit, owner, franchises });

    res.send(`New client: '${businessName}' created`);
  } catch (error) {
    console.log("error:", error.message);
    res.send('Oops! something went wrong!')
  }
};
