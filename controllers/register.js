const { Router, response } = require('express');
const express = require('express');
const router = express.Router();
const registerModel= require('../models/register')

router.post('/', async function(req, res){
    try {
    let register = await registerModel.check(req.body);
    let username = req.body.username
    res.json({
        register,
        username,
    })
}
    catch(error){
        console.error(error);
    }
    
});

module.exports = router;