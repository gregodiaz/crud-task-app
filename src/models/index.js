import Sequelize from "sequelize";

export const sequelize = new Sequelize('task-app', process.env.PG_USER, process.env.PG_PASSWORD, { 
  host: "localhost", 
  dialect: "postgres", 
  dialectOptions: {
    supportBigNumbers: true
  },

  logging: false,
});
