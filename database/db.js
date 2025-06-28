import mongoose from "mongoose";
import 'dotenv/config';


const connectToDb = async () => {
  try {
    try {
      await mongoose.connect(process.env.MONGO_URL);
      console.log("Connected to Database Successfully");
    }
    catch (error) {
      console.log(error);
    }
  }
  catch (error) {
    console.log(error);
    console.log("Failed to connect to Database");

  }
}

export default connectToDb;