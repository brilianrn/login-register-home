const jwt = require('jsonwebtoken');

function generateToken(payload) {
  let token = jwt.sign(payload, process.env.JWT_KEY);
  return token;
}

function verifyToken(token) {
  let decoded = jwt.verify(token, process.env.JWT_KEY);
  return decoded;
}

module.exports = { generateToken, verifyToken }