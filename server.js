'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
let app = express();
const port = 8880;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

const pathdirPublic = path.resolve(__dirname, 'dist');
app.use(express.static(pathdirPublic))

app.get((req, res, next) => {

  res.sendFile(__dirname + '/index.html');
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});
