const jwt = require('jsonwebtoken');
const generateToken = (user) => {
  return jwt.sign({userId: user._id,username: user.username }, 'abc123', {
    expiresIn: '1h',
  });
};

module.exports = { generateToken };
