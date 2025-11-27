const jwt = require('jsonwebtoken');

exports.generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email },
    'secret_key',
    { expiresIn: '7d' }
  );
};
