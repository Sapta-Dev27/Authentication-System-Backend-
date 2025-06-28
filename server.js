import express from 'express';
import 'dotenv/config'
import connectToDB from './database/db.js'
import authRoutes from './routes/routes.js';


const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
connectToDB();

app.use('/auth', authRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on the ${PORT}`);
})