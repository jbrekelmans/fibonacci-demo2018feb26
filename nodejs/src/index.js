const express = require('express');

const fibonacci = require('./fibonacci');

const app = express();

app.get('/', (req, res) => {
  let n
  try {
    n = BigInt(req.query.n);
  } catch (error) {
    res.status(400).type('text').send('Query string parameter "n" is missing or invalid');
    return;
  }
  const result = fibonacci(n);
  let suffix = 'th';
  const nMod10 = n % 10n;
  if (nMod10 === 1n) suffix = 'st';
  else if (nMod10 === 2n) suffix = 'nd'
  else if (nMod10 === 3n) suffix = 'rd';
  res.status(200).send(`The ${n}${suffix} Fibonacci number is ${result}!`);
});

app.get('/healthcheck', (req, res) => {
  res.status(200).send(`I'm fine!`);
});

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
process.on('SIGINT', function () {
  console.log(`Server stopping because SIGINT was received...`);
  server.close();
});
