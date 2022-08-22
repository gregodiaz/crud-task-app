import Task from "./tables/Task";
import Client from "./tables/Client";
import User from "./tables/User";
import Update from "./tables/Update";
import State from "./tables/State";
import Type from "./tables/Type";

// const intermediateTable = (tableName) => { through: tableName, timestamps: false };

User.hasMany(Task);
Task.belongsTo(User);

Client.hasMany(Task);
Task.belongsTo(Client);

State.hasMany(Task);
Task.belongsTo(State);

Type.hasMany(Update);
Update.belongsTo(Type);

User.hasMany(Update);
Update.belongsTo(User);

Task.hasMany(Update);
Update.belongsTo(Task);
