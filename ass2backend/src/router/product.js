import express from "express";
import {
  getAllProducts,
  getProductsById,
  updateProduct,
} from "../controller/product";
import { createProducts, deleteProduct } from "./../controller/product";
import { checkAuth } from "./../middlewares/checkauth";
const router = express.Router();
router.get("/products", getAllProducts);
router.get("/products/:id", getProductsById);
router.post("/products", checkAuth, createProducts);
router.put("/products/:id", checkAuth, updateProduct);
router.delete("/products/:id", checkAuth, deleteProduct);
export default router;
