import Task from "./tables/Task";
import Client from "./tables/Client";
import User from "./tables/User";
import Comment from "./tables/Comment";
import State from "./tables/State";
import Type from "./tables/Type";

// const intermediateTable = (tableName) => { through: tableName, timestamps: false };

User.hasMany(Task);
Task.belongsTo(User);

Client.hasMany(Task);
Task.belongsTo(Client);

State.hasMany(Task);
Task.belongsTo(State);

Type.hasMany(Comment);
Comment.belongsTo(Type);

User.hasMany(Comment);
Comment.belongsTo(User);

Task.hasMany(Comment);
Comment.belongsTo(Task);
