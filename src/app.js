import express, { json } from "express";
import cors from "cors";
import morgan from "morgan";
import { handleError } from "../src/controllers";

import { syncTables } from "./models";
syncTables()
import Task from "./models/Task";
import Client from "./models/Client";
import User from "./models/User";
import Update from "./models/Update";
import State from "./models/State";
import Type from "./models/Type";

// inits
const app = express();

// middlewares
app.use(json());
app.use(cors());
app.use(morgan("dev"));
app.use(handleError);

export default app;
