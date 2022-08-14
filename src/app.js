import express, { json } from "express";
import cors from "cors";
import morgan from "morgan";
import { handleError } from "../src/controllers";
import { syncTables } from "./models";

// inits
const app = express();
syncTables();

// middlewares
app.use(json());
app.use(cors());
app.use(morgan("dev"));
app.use(handleError);

export default app;
