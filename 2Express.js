const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const session = require('express-session');
const { MongoStore } = require('connect-mongo');
const helmet = require('helmet');
const logger = require('morgan');

const app = express();

// Connect to MongoDB using Mongoose
mongoose.connect('YOUR_MONGODB_URI', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(helmet()); // Adds security headers
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// Sessions and Passport
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: 'YOUR_MONGODB_URI' }),
}));

app.use(passport.initialize());
app.use(passport.session());

// Your routes and other middleware would go here

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
