import Comment from "../models/tables/Comment";
import User from "../models/tables/User";
import Task from "../models/tables/Task";
import Type from "../models/tables/Type";

export const getComments = async () => {
  try {
    return await Comment.findAll({
      include: [
        { model: User, attributes: ["firstName"] },
        { model: Type, attributes: ["description"] },
      ],
    });
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const createComment = async (query) => {
  const { description, typeId, taskId, userId } = query;

  try {
    const newComment = await Comment.create(
      { description, typeId, taskId, userId },
      { include: [{ model: User }, { model: Type }, { model: Task }] }
    );

    return newComment;
  } catch (error) {
    console.log("Error: ", error);
  }
};
