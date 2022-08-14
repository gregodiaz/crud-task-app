import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "task_app",
  process.env.PG_USER,
  process.env.PG_PASS,
  {
    host: "localhost",
    dialect: "postgres",
    dialectOptions: { supportBigNumbers: true },

    logging: false,
  }
);

export const syncTables = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("All tables synchronized");
  } catch (error) {
    console.log("error:", error);
  }
};
