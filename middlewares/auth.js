import jwt from 'jsonwebtoken';
import 'dotenv/config';

const homeMiddleware = (req, res, next) => {
  try {
    const headers = req.headers["authorization"];
    console.log("Headers is:", headers);
    const token = headers && headers.split(" ")[1];
    console.log("Token is : ", token);

    if (!token) {
      console.log("Token is not present");
      return res.status(401).json({
        success: false,
        message: "User is not authenticated. Token is not present"
      })
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log("Decoded Token is: ", decodedToken);
    if (!decodedToken) {
      console.log("Token is not valid");
      return res.status(401).json({
        success: false,
        message: "User is not authenticated. Token is not valid"
      })
    }
    req.userInfo = decodedToken;
    next();
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error. Please try again later"

    })
  }
}

export default homeMiddleware;