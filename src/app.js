import express, { json } from "express";
import cors from "cors";
import morgan from "morgan";
import { handleError } from "../src/controllers";
import { syncTables } from "./models";

// import routes
import userRouter from "./routes/user";
import clientRouter from "./routes/client";
import taskRouter from "./routes/task";

// inits
const app = express();
syncTables();

// middlewares
app.use(json());
app.use(cors());
app.use(morgan("dev"));
app.use(handleError);

// routes
app.use("/user", userRouter);
app.use("/client", clientRouter);
app.use("/task", taskRouter);

export default app;
