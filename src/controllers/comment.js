import { getComments, createComment } from "../services/comment";

export const readComments = async (req, res) => {
  try {
    const comments = await getComments();

    res.send(comments);
  } catch (error) {
    next(error);
  }
};

export const storeComment = async (req, res, next) => {
  try {
    const data = req.body;
    const newComment = await createComment(data);

    res.send(`New comment: '${newComment.description}' created`);
  } catch (error) {
    next(error);
  }
};
