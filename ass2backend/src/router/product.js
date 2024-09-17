import express from "express";
import {
  getAllProducts,
  getProductsById,
  updateProduct,
} from "../controller/product";
import { createProducts, deleteProduct } from "./../controller/product";
const router = express.Router();
router.get("/products", getAllProducts);
router.get("/products/:id", getProductsById);
router.post("/products", createProducts);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);
export default router;
