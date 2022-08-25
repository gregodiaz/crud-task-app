import { sequelize } from "../connection";
import { prop } from "../defaultProps";

const Comment = sequelize.define("comments", {
  description: prop("STRING"),
});

export default Comment;
