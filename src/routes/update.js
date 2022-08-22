import { Router } from "express";
import { readUpdates, storeUpdate } from "../controllers/update";

const router = Router();

router.get('/', readUpdates);
router.post('/', storeUpdate);

export default router;
