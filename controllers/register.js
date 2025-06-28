import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import 'dotenv/config';

const userRegister = async (req, res) => {
  try {
    try {
      const { username, useremail, userpassword, userrole } = req.body;

      const checkUser = await User.findOne({ $or: [{ userEmail: useremail }, { userName: username }] });

      if (checkUser) {
        return res.status(400).json({
          success: false,
          message: "User Already Exists . Try with another email or username"
        })
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPasword = await bcrypt.hash(userpassword, salt);

      const newUser = await User.create({
        userName: username,
        userEmail: useremail,
        userPassword: hashedPasword,
        userRole: userrole
      });

      const payload = {
        id: newUser._id,
        userNameFromToken: newUser.userName,
        userEmailFromToken: newUser.userEmail,
        userRoleFromToken: newUser.userRole
      }

      const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_EXPIRE_TIME });
      console.log(token);

      if (token) {
        console.log("Token is generated successfully");
      }
      else {
        console.log("Token generation failed")
      }

      if (newUser) {
        return res.status(201).json({
          success: true,
          message: "User is registered succesfully",
          tokenGenerated: token,
          user: {
            id: newUser._id,
            userNameFromToken: newUser.userName,
            userEmailFromToken: newUser.userEmail,
            userRoleFromToken: newUser.userRole
          }
        })
      }

      return res.status(400).json({
        success: false,
        message: "User is not registered. Please try again"
      })
    }
    catch (error) {
      console.log(error);
    }

  }
  catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    })
  }
}


export default userRegister;