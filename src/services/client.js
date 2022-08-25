import Client from "../models/tables/Client";

export const createClient = async (query) => {
  try {
    const newClient = await Client.create(query);
    return newClient;

  } catch (error) {
    console.log("error: ", error);
  }
};
