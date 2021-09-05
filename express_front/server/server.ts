'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();

var path = require('path');

const viewsPath = path.resolve(__dirname + '/../app/src/views');

app.use(express.static(path.resolve(__dirname + '/../app/public')));

app.get('/', (req, res) => {
    res.type('html').sendFile(viewsPath + '/index/index.html');
});


app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);