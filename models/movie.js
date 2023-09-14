const mongoose = require('mongoose');
const isURL = require('validator/lib/isURL');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: [true, 'Это обязательное поле!'],
  },
  director: {
    type: String,
    required: [true, 'Это обязательное поле!'],
  },
  duration: {
    type: String,
    required: [true, 'Это обязательное поле!'],
  },
  year: {
    type: String,
    required: [true, 'Это обязательное поле!'],
  },
  description: {
    type: String,
    required: [true, 'Это обязательное поле!'],
  },
  image: {
    type: String,
    required: [true, 'Это обязательное поле!'],
    validate: {
      validator(v) {
        return isURL(v);
      },
      message: 'Неправильный формат ссылки',
    },
  },
  trailerLink: {
    type: String,
    required: [true, 'Это обязательное поле!'],
    validate: {
      validator(v) {
        return isURL(v);
      },
      message: 'Неправильный формат ссылки',
    },
  },
  thumbnail: {
    type: String,
    required: [true, 'Это обязательное поле!'],
    validate: {
      validator(v) {
        return isURL(v);
      },
      message: 'Неправильный формат ссылки',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: Number,
    required: [true, 'Это обязательное поле!'],
  },
  nameRU: {
    type: String,
    required: [true, 'Это обязательное поле!'],
  },
  nameEN: {
    type: String,
    required: [true, 'Это обязательное поле!'],
  },
});

module.exports = mongoose.model('movie', movieSchema);