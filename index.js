const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello World!</h1>
    <p>Check out this video: <a href="https://www.youtube.com/" target="_blank">YouTube</a></p>
  `);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
