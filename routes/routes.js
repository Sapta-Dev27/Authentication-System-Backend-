import express from "express";
import registerRoute from "../controllers/register.js"
import loginRoute from "../controllers/login.js"
import homeMiddleware from "../middlewares/auth.js";
import changeUserName from "../controllers/changeUserName.js";

const router = express.Router();

router.post("/register", registerRoute);
router.post("/login", loginRoute);
router.post("/changeUserName", homeMiddleware , changeUserName)


export default router;

