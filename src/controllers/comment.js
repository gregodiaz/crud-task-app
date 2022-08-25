import { getComments, createComment } from "../services/comment";

export const readComments = async (req,res) => { 
  const comments = await getComments()
  res.send(comments)
};

export const storeComment = async (req, res, next) => {
  try {
    const data = req.body
    const newComment = await createComment(data)

    res.send(`New comment: '${newComment.description}' created`);
  } catch (error) {
    console.log("Error:", error.message);
    res.send("Oops! something went wrong!");
  }
};
