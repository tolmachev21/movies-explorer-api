const BadRequestError = require('./badRequestError');
const UnAuthorizedError = require('./unAuthorizedError');
const ForbiddenError = require('./forbiddenError');
const NotFoundError = require('./notFoundError');
const ConflictError = require('./conflicError');

module.exports = {
  BadRequestError,
  UnAuthorizedError,
  ForbiddenError,
  NotFoundError,
  ConflictError,
};