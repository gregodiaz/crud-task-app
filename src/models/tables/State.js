import { sequelize } from "../connection";
import { prop } from "../defaultProps";

const State = sequelize.define("states",
  { description: prop("STRING") },
  { timestamps: false }
);

export default State;
// State.create({description: 'Required'})
// State.create({description: 'In Progress'})
// State.create({description: 'Development'})
// State.create({description: 'Test with Client'})
// State.create({description: 'Stopped'})
// State.create({description: 'Close'})
