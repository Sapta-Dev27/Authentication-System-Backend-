import User from "../models/user.js";
import bcrypt from "bcryptjs";


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

      if (newUser) {
        return res.status(201).json({
          success: true,
          message: "User is registered succesfully"
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