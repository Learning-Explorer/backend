const {db} = require('../database/conection')
const bcrypt = require('bcrypt');

async function login(data){
    try{
    let email = data.email
    let password = data.password;
    const passwordDB = await db.one(`SELECT password, username FROM users WHERE email = $1`, [email])
    let securePassword= passwordDB.password;
    let username = passwordDB.username;
    let allowed = bcrypt.compareSync(password, securePassword)
    console.log(allowed)
    switch(allowed){
        case (true):
            return {
                "message":'Login accepted',
                "status": 200,
                username
            }
            break
        case (false):
            return {
                "status": 204
            }
    }
    }catch(error){
        console.error(error);
    }
}
module.exports = {
    login,
}