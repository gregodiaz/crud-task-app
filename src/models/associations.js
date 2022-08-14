import Task from "./Task";
import Client from "./Client";
import User from "./User";
import Update from "./Update";
import State from "./State";
import Type from "./Type";

const intermediateTable = { through: 'task_updates', timestamps: false };

export const syncAssociations = () => {
  User.hasMany(Task);
  Task.belongsTo(User);

  Client.hasMany(Task);
  Task.belongsTo(Client);

  State.hasMany(Task);
  Task.belongsTo(State);

  Type.hasMany(Update);
  Update.belongsTo(Type);

  Task.belongsToMany(Update, intermediateTable);
  Update.belongsToMany(Task, intermediateTable);
};
