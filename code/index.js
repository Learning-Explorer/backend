"use strict";

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var dotenv = require('dotenv').config();

var db = require('../database/conection');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/', function (req, res) {
  res.send('Home');
});
app.listen(8000, function () {
  console.log('Learning explorer running in localhost:8000');
});