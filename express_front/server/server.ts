'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();

var path = require('path');

const publicPath = path.resolve(__dirname + '/../app/public');

app.use(express.static(publicPath));

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
