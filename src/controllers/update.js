import { getUpdates, createUpdate } from "../services/update";

export const readUpdates = async (req,res) => { 
  const updates = await getUpdates()
  res.send(updates)
};

export const storeUpdate = async (req, res, next) => {
  try {
    const data = req.body
    const newUpdate = await createUpdate(data)

    res.send(`New update: '${newUpdate.description}' created`);
  } catch (error) {
    console.log("error:", error.message);
    res.send("Oops! something went wrong!");
  }
};
