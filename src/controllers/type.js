import { deleteType, createType } from "../services/type";

export const storeType = async (req, res, next) => {
  try {
    const data = req.body;
    const newType = await createType(data);

    res.send(`New type: '${newType.description}' created`);
  } catch (error) {
    console.log("Error:", error.message);
    res.send("Oops! something went wrong!");
  }
};

export const eraseType = async (req, res, next) => {
  const { id } = req.params;
  await deleteType(id);

  res.send(`The type was deleted`);
};
