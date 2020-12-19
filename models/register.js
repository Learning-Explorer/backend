const {db} = require('../database/conection')
const bcrypt = require('bcrypt');
const bodyParsee = require('body-parser')
const fetch = require('node-fetch');

async function check (data) {
    try{
        let firstname = data.firstname;
        let lastname = data.lastname;
        let email = data.email;
        let username = data.username;
        let password = data.password;
        let emailRegistered = await db.any(`SELECT email FROM users WHERE email = $1`, [email])
        let securePassword = await bcrypt.hash(password, 10)
        
        if(email== emailRegistered.email){
            throw new Error ('This email already was registered, please try with other email');
        } 
        await db.any(`INSERT INTO users (first_name, last_name, email, username, password, user_active_id) 
        VALUES($1, $2, $3, $4, $5, $6)`,[
            firstname,
            lastname,
            email,
            username,
            securePassword,
            1
        ])
        return {
            status:201,
            message:"registered user"
        }
    }catch (error){
        console.error(error);
        return {
            status:204
        }
    }
}
async function coursesDone (url){
        await fetch ('https://platzi-user-api.jecsham.com/api/v1/getUserSummary/@Lidenbrock_ed', { 
            method:'GET',
            headers:{
            'Content-Type': 'application/json'
            },
        })
        .then( (res)=> {
            return res.json()
            //let b = data.userData.courses;
            //console.log(b);
            //return data;
        })
        .then((json)=> {
            console.log(json);
            return json;
        })
        .catch( async function (error){
            console.error(error);
        })
}

module.exports = {
    check,
    coursesDone,
}