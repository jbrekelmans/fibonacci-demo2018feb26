/**
 * Copyright 2018, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// [START app]
const express = require('express');

const fibonacci = require('./fibonacci');

const app = express();

app.get('/', (req, res) => {
  let n
  try {
    n = BigInt(req.query.n)
  } catch (error) {
    res.status(400).type('text').send('Query string parameter "n" is missing or invalid')
    return
  }
  const result = fibonacci(n)
  let suffix = 'th'
  const nMod10 = n % 10n
  if (nMod10 === 1) suffix = 'st'
  else if (nMod10 === 2) suffix = 'nd'
  res.status(200).send(`The ${n}${suffix} Fibonacci number is ${result}!`);
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
process.on('SIGINT', function () {
  console.log(`Server stopping because SIGINT was received...`);
  server.close();
});
// [END app]

module.exports = app;
