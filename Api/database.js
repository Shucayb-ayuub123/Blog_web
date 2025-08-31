import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()
const DB = mysql.createConnection({
    host : process.env.DB_LOCALHOST,
    user :process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE 
}) 

DB.connect((err) => {
    if (err) {
        
        console.log("❌ Unconnected database");
    } else {
        
        console.log("✅ successfully connected");
    }
})

export default DB;