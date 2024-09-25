import express from 'express';
import {
  getAllProducts,
  getProductsById,
  updateProduct
} from '../controller/product';
import { createProducts, deleteProduct } from './../controller/product';
const routerProducts = express.Router();
routerProducts.get('', getAllProducts);
routerProducts.get('/:id', getProductsById);
routerProducts.post('', createProducts);
routerProducts.put('/:id', updateProduct);
routerProducts.delete('/:id', deleteProduct);
export default routerProducts;
