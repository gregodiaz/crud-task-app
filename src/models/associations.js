import Task from "./tables/Task";
import Client from "./tables/Client";
import User from "./tables/User";
import Update from "./tables/Update";
import State from "./tables/State";
import Type from "./tables/Type";

// const intermediateTable = (tableName) => { through: tableName, timestamps: false };

export const syncAssociations = () => {
  User.hasMany(Task);
  Task.belongsTo(User);

  Client.hasMany(Task);
  Task.belongsTo(Client);

  State.hasMany(Task);
  Task.belongsTo(State);

  Type.hasMany(Update);
  Update.belongsTo(Type);

  Client.hasMany(Update);
  Update.belongsTo(Client);

  Task.hasMany(Update);
  Update.belongsTo(Task);
  // Task.belongsToMany(Update, intermediateTable('task_updates'));
  // Update.belongsToMany(Task, intermediateTable('task_updates'));
};
