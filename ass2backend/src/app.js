import express from "express";
import productRoute from "./router/product";
import { connectDB } from "./config/db";
const app = express();
app.use(express.json());
app.use("/api", productRoute);
connectDB();

export const viteNodeApp = app;
