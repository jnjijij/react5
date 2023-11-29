const express = require('express');
const cors = require('cors');

const app = express();

// Allow requests from all origins, you may want to restrict this in production
app.use(cors());

// ... rest of your server configuration

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
