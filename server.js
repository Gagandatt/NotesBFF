const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const notesRoutes = require('./routes/notes');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const generateAPIDocumentation = require('./apiDocumentation');


const app = express();
connectDB();


app.use(bodyParser.json());
app.use(cors());
// app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  const apiDocumentation = generateAPIDocumentation();
  res.send(apiDocumentation);
});
app.get('*', (req, res) => {
  res.redirect('/');
});
app.use('/api',notesRoutes);
app.use('/api/auth', authRoutes);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
