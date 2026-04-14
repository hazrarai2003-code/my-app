const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>My App</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: #ffffff;
      color: #000000;
      font-family: monospace;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    h1 { font-size: 48px; font-weight: bold; }
  </style>
</head>
<body>
  <h1>Hello CI/CD Pipeline 🚀</h1>
</body>
</html>
  `);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});