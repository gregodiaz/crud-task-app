import express, { json } from "express";
import cors from "cors";
import morgan from "morgan";
import { handleError } from "../src/controllers";

// import routes
import userRouter from "./routes/user";
import clientRouter from "./routes/client";
import taskRouter from "./routes/task";
import commentRouter from "./routes/comment";
import stateRouter from "./routes/state";
import typeRouter from "./routes/type";

// inits
const app = express();

// middlewares
app.use(json());
app.use(cors());
app.use(morgan("dev"));
app.use(handleError);

// routes
app.use("/user", userRouter);
app.use("/client", clientRouter);
app.use("/task", taskRouter);
app.use("/comment", commentRouter);
app.use("/state", stateRouter);
app.use("/type", typeRouter);

export default app;
