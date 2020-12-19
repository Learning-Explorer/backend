const express = require('express');
const router = express.Router();
const loginModel= require('../models/login')

router.post('/', async function(req, res){
    try {
        let login = await loginModel.login(req.body);
        res.json(login)
    }catch(error){
        console.error(error);
    }
});

module.exports = router;