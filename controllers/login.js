import mongoose from "mongoose";
import 'dotenv/config';
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import bcrypt from "bcryptjs";

const userLogin = async (req, res) => {
  try {
    try {
      const { useremail, userpassword } = req.body;
      const userCheck = await User.findOne({ userEmail: useremail });
      if (!userCheck) {
        return res.status(404).json({
          success: false,
          message: "User with this Email does not exist. Please register first or try with another email"
        })
      }
      const checkPassword = await bcrypt.compare(userpassword, userCheck.userPassword    );
      if (!checkPassword) {
        return res.status(401).json({
          success: false,
          message: " Invalid Password . Please try again with correct password"
        })
      }
      const payload = {
        id: userCheck._id,
        userNameFromToken: userCheck.userName,
        userEmailFromToken: userCheck.userEmail,
        userRoleFromToken: userCheck.userRole
      }
      const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRE_TIME || "1d"
      })
      if (token) {
        console.log("Token is generated successfully");
      }
      else {
        console.log("Token generation failed")
      }
      return res.status(200).json({
        success: true,
        message: "User is logged in successfully",
        tokenGenerated: token,
        user: {
          id: userCheck._id,
          userNameFromToken: userCheck.userName,
          userEmailFromToken: userCheck.userEmail,
          userRoleFromToken: userCheck.userRole
        }
      })

    }
    catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "User is not logged in. Please try again"
      })

    }
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({
      success: true,
      message: "Internal Server Error"
    })
  }
}

export default userLogin;