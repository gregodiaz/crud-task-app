import { Router } from "express";
import { storeType, eraseType } from "../controllers/type";

const router = Router();

router.post('/', storeType);
router.delete('/:id', eraseType);

export default router;
