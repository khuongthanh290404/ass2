import express from "express";
import { deletetUser, getUser, Login, Register } from "../controller/auth";

const router = express.Router();
router.post("/register", Register);
router.post("/login", Login);
router.get("/user", getUser);
router.delete("/user/:id", deletetUser);
export default router;
