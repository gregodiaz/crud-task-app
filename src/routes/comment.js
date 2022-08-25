import { Router } from "express";
import { readComments, storeComment } from "../controllers/comment";

const router = Router();

router.get('/', readComments);
router.post('/', storeComment);

export default router;
