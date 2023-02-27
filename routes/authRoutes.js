import express from "express";
const router = express.Router();

import { register, login, me } from "../controllers/authControllers.js";

router.post("api/v1/auth/register", register);

router.post("/login", login);

router.get("/me", me);

export default router;
