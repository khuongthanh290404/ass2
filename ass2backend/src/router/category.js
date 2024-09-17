import express from "express";
import {
  create,
  getAll,
  getDetail,
  remove,
  update,
} from "../controller/category";

const router = express.Router();
router.get("/categorys", getAll);
router.get("/categorys/:id", getDetail);
router.post("/categorys", create);
router.put("/categorys/:id", update);
router.delete("/categorys/:id", remove);
export default router;
