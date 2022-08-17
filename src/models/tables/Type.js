import { sequelize } from "../connection";
import { prop } from "../defaultProps";

const Type = sequelize.define( "types",
  { description: prop("STRING") },
  { timestamps: false }
);

export default Type;
// Type.create({description: 'Action'})
// Type.create({description: 'Comment'})
// Type.create({description: 'Reminder'})
