import homeMiddleware from "../middlewares/auth.js";
import express from "express";
const router = express.Router();


router.get("/me", homeMiddleware, (req, res) => {
  const { userNameFromToken, userEmailFromToken, userPasswordFromToken, userRoleFromToken } = req.userInfo;
  return res.status(200).json({
    success: true,
    message: "Welcome to the Home Page ",
    user: {
      userNameFromToken,
      userEmailFromToken,
      userRoleFromToken,
      userPasswordFromToken // password will be shown in hashed format //
    }
  })
})


export default router;