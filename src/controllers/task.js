import { createTask } from "../services/task";

export const storeTask = async (req, res, next) => {
  try {
    const data = req.body
    const newTask = await createTask(data)

    res.send(`New task: '${newTask.title}' created`);
  } catch (error) {
    console.log("Error:", error.message);
    res.send("Oops! something went wrong!");
  }
};
