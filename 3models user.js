// models/user.js
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  // Додайте інші поля користувача, якщо потрібно
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
