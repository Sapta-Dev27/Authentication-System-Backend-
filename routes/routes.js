import express from "express";
import authRoutes from "../controllers/register.js"

const router = express.Router();

router.post("/register", authRoutes);

export default router;

