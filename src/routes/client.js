import { Router } from "express";
import { createClient } from "../controllers/client";

const router = Router();

router.post('/', createClient);

export default router;
