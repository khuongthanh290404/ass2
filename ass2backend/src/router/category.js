import express from 'express';
import {
  create,
  getAll,
  getDetail,
  remove,
  update
} from '../controller/category';

const router = express.Router();
router.get('/categories', getAll);
router.get('/categories/:id', getDetail);
router.post('/categories', create);
router.put('/categories/:id', update);
router.delete('/categories/:id', remove);
export default router;
