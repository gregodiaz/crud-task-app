import { Router } from "express";
import { storeClient } from "../controllers/client";

const router = Router();

router.post('/', storeClient);

export default router;
