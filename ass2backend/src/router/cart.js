import express from "express";
import {
  createCart,
  //   deleteCart,
  getAllCart,
  getCartDetail,
  //   updateCart,
} from "../controller/cart";

const router = express.Router();
router.get("/carts", getAllCart);
router.get("/carts/:id", getCartDetail);
router.post("/carts", createCart);
// router.put("/carts/:id", updateCart);
// router.delete("/carts/:id", deleteCart);
export default router;