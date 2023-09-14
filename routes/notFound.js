const router = require('express').Router();
const { NotFoundError } = require('../errors');

router.use('/*', (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = router;