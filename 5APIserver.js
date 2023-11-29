// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/api/feedback', (req, res) => {
  const { message } = req.body;
  
  console.log('Received feedback:', message);
  res.status(200).send('Message received successfully!');
});



