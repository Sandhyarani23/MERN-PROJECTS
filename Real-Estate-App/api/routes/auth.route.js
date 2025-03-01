import express from "express";
import { login,logout,register } from "../controllers/auth.controller.js";

const router=express.Router();

router.post("/api/auth/register",register);
router.post("/login",login);
router.post("/logout",logout);

export default router;