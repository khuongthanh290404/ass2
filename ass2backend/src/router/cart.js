import express from 'express';
import {
  createCart,
  //   deleteCart,
  getAllCart,
  getCartDetail
  //   updateCart,
} from '../controller/cart';

const routerCart = express.Router();
routerCart.get('', getAllCart);
routerCart.get('/:id', getCartDetail);
routerCart.post('', createCart);
// routerCart.put("/carts/:id", updateCart);
// routerCart.delete("/carts/:id", deleteCart);
export default routerCart;
