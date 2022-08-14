import { sequelize } from "./connection";
import { prop } from "./defaultProps";

const State = sequelize.define("states", {
  description: prop("STRING"),
});

export default State;
