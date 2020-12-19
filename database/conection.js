/*const { Console } = require('console');
const {Sequelize}= require('sequelize');
const {USER, PASSWORD, HOST, PORT, DATABASE} = process.env; 
const sequelize = new Sequelize(`postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`)
sequelize.authenticate()
    try{
        console.log('Database Connected');
    }catch{
        console.log('Connection with Database Failed', error);
    }
module.exports = sequelize;*/

const pgp = require('pg-promise')();
const {USER, PASSWORD, HOST, PORT, DATABASE} = process.env;
const db = pgp(`postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`);

db.connect()
try{
    console.log('Connected to PosgreSQL');
}catch{
    console.log('Connection with Database Failed', error);
}


module.exports = {
    db
}