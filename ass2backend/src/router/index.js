import express from 'express';
import routerAuth from './auth';
import routerCategories from './category';
import routerProducts from './product';
import routerCart from './cart';

const router = express.Router();

router.use('/auth', routerAuth);
router.use('/categories', routerCategories);
router.use('/products', routerProducts);
router.use('/carts', routerCart);

export default router;
