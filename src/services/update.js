import Update from "../models/tables/Update";
import User from "../models/tables/User";
import Task from "../models/tables/Task";
import Type from "../models/tables/Type";

export const getUpdates = async () => {
  try {
    return await Update.findAll({
      include: [{ model: User }, { model: Task }, { model: Type }],
    });
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const createUpdate = async (query) => {
  const { description, typeId, taskId, userId } = query;

  const params = (model, param) => model.findOne({ where: { id: param } });

  try {
    const type = await params(Type, typeId);
    const task = await params(Task, taskId);
    const author = await params(User, userId);

    const newUpdate = await Update.create({ description });

    await newUpdate.setType(type.id);
    await newUpdate.setTask(task.id);
    await newUpdate.setUser(author.id);

    return newUpdate;
  } catch (error) {
    console.log("Error: ", error);
  }
};
