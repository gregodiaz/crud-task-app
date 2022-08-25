import { Router } from "express";
import { storeUser } from "../controllers/user";

const router = Router();

router.post('/', storeUser);

export default router;
