var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "db.sqlite" 


let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQlite database.')
        db.run(
            `CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            first_name text,
            last_name text, 
            email text UNIQUE,
            phone text, 
            org text,
            country text, 
            CONSTRAINT email_unique UNIQUE (email)
            )`
            ,(err) => {
        if (err) {
            console.log(err)
            // Table already created
        }else{
            // Table just created, creating some rows
            var insert = 'INSERT INTO user (first_name, last_name, email, phone, org, country) VALUES (?,?,?,?,?,?)'
            db.run(insert, ["admin","admin","admin@example.com","99909990", "org", "count"])
        }
    })  
    }
})


module.exports = db

