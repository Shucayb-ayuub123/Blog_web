import express from "express";
import { register } from "../Controller/auth.js";
import { login } from "../Controller/auth.js";
import { logout } from "../Controller/auth.js";

const router = express.Router();

router.post("/register", register);
router.get("/login", login);
router.get("/logout", logout);

export default router;
