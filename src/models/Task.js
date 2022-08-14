import { sequelize } from "./connection";
import { prop } from "./defaultProps";

const Task = sequelize.define("tasks", {
  priority: prop("INTEGER", { defaultValue: 0 }),
  title: prop("STRING"),
  done: prop("BOOLEAN", { defaultValue: false }),
});

export default Task;
