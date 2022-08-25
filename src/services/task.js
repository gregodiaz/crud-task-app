import Task from "../models/tables/Task";
import User from "../models/tables/User";
import Client from "../models/tables/Client";
import State from "../models/tables/State";

export const createTask = async (query) => {
  const { title, userId, clientId, stateId } = query;

  try {
    const newTask = await Task.create(
      { title, userId, clientId, stateId },
      { include: [{ model: User }, { model: Client }, { model: State }] }
    );

    return newTask;
  } catch (error) {
    console.log("Error: ", error);
  }
};
