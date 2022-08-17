import { sequelize } from "../connection";
import { prop } from "../defaultProps";

const User = sequelize.define("users", {
  firstName: prop("STRING"),
  lastName: prop("STRING"),
  active: prop("BOOLEAN", { defaultValue: true }),
});

export default User;
