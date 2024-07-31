const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from the other side!');
});

app.listen(port, () => {
  console.log(`Node.js app listening at http://localhost:${port}`);
});
