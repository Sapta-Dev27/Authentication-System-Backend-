import User from "../models/user.js";

const changeUserName = async (req, res) => {
  try {
    const userId = req.userInfo.id;
    const { newUserName } = req.body;
    const checknewUserName = await User.findOne({ userName: newUserName });
    if (checknewUserName) {
      return res.status(409).json({
        success: false,
        message: "Username already exists. Please try another username"
      })
    }
    const updatedUser = await User.findByIdAndUpdate(userId, { userName: newUserName }, { new: true });
    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "Username Update failed"
      })
    }
    return res.status(200).json({
      success: true,
      message: "Username updated successfully"
    })
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error. Please try again later"
    })
  }
}

export default changeUserName;