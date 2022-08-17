import Task from "../models/tables/Task";
import User from "../models/tables/User";

export const createTask = async (req, res, next) => {
  try {
    const { title, userId, clientId, stateId, test } = req.body;

    await Task.create({ title, userId, clientId, stateId });

    res.send(`New task: '${title}' created by user n${userId}`);
  } catch (error) {
    console.log("error:", error.message);
    res.send("Oops! something went wrong!");
  }
};

export const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.findAll({ include: Task.User });

    res.send(tasks);
  } catch (error) {
    console.log("error:", error.message);
    res.send("Oops! something went wrong!");
  }
};
