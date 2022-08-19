import Task from "../models/tables/Task";
import User from "../models/tables/User";
import Client from "../models/tables/Client";

export const createTask = async (query) => {
  const { title, userId, clientId } = query;

  try {
    const responsible = await User.findOne({ where: { id: userId } });
    const client = await Client.findOne({ where: { id: clientId } });

    const newTask = await Task.create({ title, stateId: 1 });

    await newTask.setUser(responsible.id);
    await newTask.setClient(client.id);

    return newTask;
  } catch (error) {
    console.log("Error: ", error);
  }
};
