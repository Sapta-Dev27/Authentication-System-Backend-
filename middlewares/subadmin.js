const subadminMiddleware = (req, res, next) => {
  try {
    const checksubAdmin = req.userInfo.userRoleFromToken;
    if (checksubAdmin == "subadmin") {
      next();
    }
    else {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to access this resource. Only subadmin can access this resource"
      })
    }
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error. Please try again later"
    })
  }
}

export default subadminMiddleware