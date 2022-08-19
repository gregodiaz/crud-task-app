import { Router } from "express";
import { storeTask } from "../controllers/task";

const router = Router();

router.post('/', storeTask);

export default router;
