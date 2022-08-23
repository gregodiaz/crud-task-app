import { Router } from "express";
import { storeState, eraseState } from "../controllers/state";

const router = Router();

router.post('/', storeState);
router.delete('/:id', eraseState);

export default router;
