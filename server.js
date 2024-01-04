const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const notesRoutes = require('./routes/notes');
const cors = require('cors');
require('dotenv').config();

const app = express();
connectDB();


app.use(bodyParser.json());
app.use(cors());
app.use('/notes',notesRoutes);
app.use('/auth', authRoutes);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
