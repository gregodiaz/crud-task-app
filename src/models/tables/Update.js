import { sequelize } from "../connection";
import { prop } from "../defaultProps";

const Update = sequelize.define("updates", {
  description: prop("STRING"),
});

export default Update;
