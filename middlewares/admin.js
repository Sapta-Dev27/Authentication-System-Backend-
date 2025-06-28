const adminMiddleware = (req, res, next) => {
  try {
    const checkAdmin = req.userInfo.userRoleFromToken;
    if (checkAdmin == "admin") {
      next();
    }
    else {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to access this resource. Only admin can access this resource"
      })
    }
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error. Please try again later",
    
    })
  }
}

export default adminMiddleware;