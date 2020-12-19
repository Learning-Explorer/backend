const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const db = require('../database/conection')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//controllers
const registerController = require('../controllers/register');
const loginController = require('../controllers/login');

//Routes
app.use('/api/register', registerController);
app.use('/api/login', loginController);
app.get('/', function (req, res) {
    res.send('Home');
})


app.listen(3000 , function () {
    console.log('Learning explorer running in localhost:3000')
})