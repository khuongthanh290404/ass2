import express from "express";
import productRoute from "./router/product";
import { connectDB } from "./config/db";
import cors from "cors";
import authRoute from "./router/auth";
import categoryRoute from "./router/category";
import cartRoute from "./router/cart";
// import commentRoute from "./router/comment";
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
app.use("/api", authRoute);
app.use("/api", categoryRoute);
app.use("/api", cartRoute);
export const viteNodeApp = app;
