import express from "express";
import {
  create,
  getAll,
  getDetail,
  remove,
  update,
} from "../controller/category";
import { checkAuth } from "./../middlewares/checkauth";

const router = express.Router();
router.get("/categorys", getAll);
router.get("/categorys/:id", getDetail);
router.post("/categorys", checkAuth, create);
router.put("/categorys/:id", checkAuth, update);
router.delete("/categorys/:id", checkAuth, remove);
export default router;
