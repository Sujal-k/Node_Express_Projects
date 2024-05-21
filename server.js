const express = require('express');
const data = require('./data.json');

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/api/data', (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
