import { sequelize } from "./connection";
import { prop } from "./defaultProps";

const Client = sequelize.define("clients", {
  businessName: prop("STRING"),
  cuit: prop("INTEGER"),
  owner: prop("STRING"),
  franchises: prop("INTEGER"),
  active: prop("BOOLEAN", { defaultValue: true }),
});

export default Client;
