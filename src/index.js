import express from "express";
import "dotenv/config";
import app from "./app";

const PORT = process.env.PORT || 2225;

app.listen(PORT, () => console.log(`Server on port ${PORT}`));
