import { createClient } from "../services/client";

export const storeClient = async (req, res, next) => {
  try {
    const data = req.body;
    const newClient = await createClient(data);

    res.send(`New client: '${newClient.businessName}' created`);
  } catch (error) {
    next(error);
  }
};
