import express from "express";
import registerRoute from "../controllers/register.js"
import loginRoute from "../controllers/login.js"

const router = express.Router();

router.post("/register", registerRoute);
router.post("/login", loginRoute);


export default router;

