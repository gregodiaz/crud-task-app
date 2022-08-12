import express, { json } from "express";
import cors from "cors";
import morgan from "morgan";
import { handleError } from "../src/controllers";

// inits
const app = express();

// middlewares
app.use(json());
app.use(cors());
app.use(morgan("dev"));
app.use(handleError);

export default app;
