import { Router } from "express";
import { createUser, sayHi } from "../controllers/userController";

const router = Router();

router.get("/", sayHi);

router.post("/api/signup", createUser);

export default router;
