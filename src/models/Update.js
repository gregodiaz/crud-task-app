import { sequelize } from "./connection";
import { prop } from "./defaultProps";

const Update = sequelize.define("updates", {
  author: prop("INTEGER"),
  description: prop("STRING"),
});

export default Update;
