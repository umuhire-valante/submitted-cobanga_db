const mysql=require('mysql');
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'cobanga_db'
});
connection.connect((err)=>{
    if(err)err;
    console.log('database was connected');
})
module.exports=connection;