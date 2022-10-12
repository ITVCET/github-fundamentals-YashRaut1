const {Client} = require('pg')
const client = new Client({
host: "localhost",
user: "postgres",
port:5432,
password: "user123",
database:"Yash"
})
client.connect();
client.query( 'Select * from teacher', (err, res) =>{
   if(!err){
 console.log(res.rows);
}
else {
console.log(err.message);
}
client.end;
})

