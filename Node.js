// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// Define your API routes
app.use('/api/movies', moviesRoutes);
app.use('/api/genres', genresRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
