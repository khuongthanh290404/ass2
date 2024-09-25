import express from 'express';
import {
  create,
  getAll,
  getDetail,
  remove,
  update
} from '../controller/category';

const routerCategories = express.Router();
routerCategories.get('', getAll);
routerCategories.get('/:id', getDetail);
routerCategories.post('', create);
routerCategories.put('/:id', update);
routerCategories.delete('/:id', remove);
export default routerCategories;
