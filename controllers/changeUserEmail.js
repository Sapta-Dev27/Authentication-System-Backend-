import User from "../models/user.js";

const changeUserEmail = async (req, res) => {
  try {
    const userId = req.userInfo.id;
    const { newUserEmail } = req.body;
    const checkUserEmail = await User.findOne({ userEmail: newUserEmail });
    if (checkUserEmail) {
      return res.status(409).json({
        success: false,
        message: "Email already exists. Please try another email"
      })
    }
    const updatedUserEmail = await User.findByIdAndUpdate(userId, { userEmail: newUserEmail }, { new: true })
    if (!updatedUserEmail) {
      return res.status(404).json({
        success: false,
        message: "Email Update failed"
      })
    }
    return res.status(200).json({
      success: true,
      message: "Email updated successfully"
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

export default changeUserEmail