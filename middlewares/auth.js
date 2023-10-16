const jwt = require('jsonwebtoken');
const { UnAuthorizedError } = require('../errors/index');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    next(new UnAuthorizedError('Необходима авторизация'));
    return;
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, 'my-secret-key');
  } catch (err) {
    next(new UnAuthorizedError('Необходима авторизация'));
    return;
  }
  req.user = payload;

  next();
};