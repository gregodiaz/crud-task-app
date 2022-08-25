import { deleteState, createState } from "../services/state";

export const storeState = async (req, res, next) => {
  try {
    const data = req.body;
    const newState = await createState(data);

    res.send(`New state: '${newState.description}' created`);
  } catch (error) {
    next(error);
  }
};

export const eraseState = async (req, res, next) => {
  try {
    const { id } = req.params;
    await deleteState(id);

    res.send(`The state was deleted`);
  } catch (error) {
    next(error);
  }
};
