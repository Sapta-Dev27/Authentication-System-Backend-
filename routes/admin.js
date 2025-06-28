import express from "express";
import homeMiddleware from "../middlewares/auth.js";
import adminMiddleware from "../middlewares/admin.js";

const router = express.Router();

router.get("/admin", homeMiddleware, adminMiddleware, (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Welcome to the Admin Page",
    user: {
      id: req.userInfo.id,
      userName: req.userInfo.userNameFromToken,
      userEmail: req.userInfo.userEmailFromToken,
      userRole: req.userInfo.userRoleFromToken
    }
  })
})

export default router;