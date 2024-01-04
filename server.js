const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const notesRoutes = require('./routes/notes');
const rateLimit = require('express-rate-limit');
const cache = require('express-redis-cache');
const cors = require('cors');
require('dotenv').config();

const app = express();
connectDB();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100, 
  message: 'Too many requests from this IP, please try again later',
});

const redisCache = cache({ client: require('redis').createClient(process.env.REDIS_URL) });

app.use(bodyParser.json());
app.use(cors());
app.use(limiter);
app.use('/',redisCache.route(), notesRoutes);
app.use('/api/auth', authRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
