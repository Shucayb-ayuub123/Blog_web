import mysql from 'mysql2'

const DB = mysql.createConnection({
    host : "localhost",
    user :"root",
    password : "Fv!7uX#nR@4eWz8GqLp$T1bE",
    database : "blog"
}) 

DB.connect((err) => {
    if (err) {
        
        console.log("❌ Unconnected database");
    } else {
        
        console.log("✅ successfully connected");
    }
})

export default DB;