import express from "express";
import homeMiddleware from "../middlewares/auth.js";
import subadminMiddleware from "../middlewares/subadmin.js";

const router = express.Router();

router.get("/subadmin" ,  homeMiddleware , subadminMiddleware, (req,res) => {
  return res.status(200).json({
    success : true ,
    message : "Welcome to the Subadmin Page",
    user : {
      id : req.userInfo.id,
      userName : req.userInfo.userNameFromToken,
      userEmail : req.userInfo.userEmailFromToken,
      userRole : req.userInfo.userRoleFromToken
    }
  })
})

export default router;