import { sequelize } from "./connection";
import { prop } from "./defaultProps";

const Type = sequelize.define("types", {
  description: prop("STRING"),
});

export default Type;
