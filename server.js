import express from 'express';
import 'dotenv/config'
import connectToDB from './database/db.js'
import authRoutes from './routes/routes.js';
import homeroute from './routes/home.js'
import adminroute from './routes/admin.js'
import subadminroute from './routes/subadmin.js'

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
connectToDB();

app.use('/auth', authRoutes);
app.use('/auth/home', homeroute);
app.use('/auth/home', adminroute);
app.use('/auth/home', subadminroute);

app.listen(PORT, () => {
  console.log(`Server is running on the ${PORT}`);
})