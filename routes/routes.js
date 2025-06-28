import express from "express";
import registerRoute from "../controllers/register.js"
import loginRoute from "../controllers/login.js"
import homeMiddleware from "../middlewares/auth.js";
import changeUserName from "../controllers/changeUserName.js";
import changeUserEmail from "../controllers/changeUserEmail.js";

const router = express.Router();

router.post("/register", registerRoute);
router.post("/login", loginRoute);
router.post("/changeUserName", homeMiddleware , changeUserName)
router.post("/changeUserEmail", homeMiddleware, changeUserEmail);


export default router;

