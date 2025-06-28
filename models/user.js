import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true
  },
  userEmail: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
  userRole: {
    type: String,
    enum: ["user", "admin", "subadmin"],
    default: "user",
    required: true
  }
})

const User = mongoose.model("User", userSchema);

export default User;