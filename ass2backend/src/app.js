import express from "express";
import productRoute from "./router/product";
import { connectDB } from "./config/db";
import cors from "cors";
const app = express();
app.use(express.json());
connectDB();
app.use(cors());
const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use("/api", productRoute);
export const viteNodeApp = app;
