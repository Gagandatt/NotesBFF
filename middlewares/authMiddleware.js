const jwt = require('jsonwebtoken');

const excludedRoutes = ['/api/auth/signup'];

const authenticateUser = (req, res, next) => {
  const token = req.header('Authorization');
  const currentRoute = req.originalUrl;

  if (!token && !excludedRoutes.includes(currentRoute)) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  if (!excludedRoutes.includes(currentRoute)) {
    try {
      const decoded = jwt.verify(token, 'abc123');
      req.user = decoded;
    } catch (error) {
      console.error(error);
      return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
  }
  next();
};

module.exports = { authenticateUser };
