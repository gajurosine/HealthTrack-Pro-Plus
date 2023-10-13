const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('healthmonitoring.db');

db.run(`CREATE TABLE IF NOT EXIT PATIENTS(patientID integer not null PRIMARY KEY AUTOINCREMENT , nationalID INTEGER NOT NULL , patientName varchar(60) NOT NULL , heartRate integer NOT NULL , temperature REAL NOT NULL)`);

db.run(`CREATE TABLEIF NOT EXIT admin (adminID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT , username TEXT NOT NULL , passwword TEXT NOT NULL)`);


db.close((err) =>{
    if(err){
        return console.error('Database failed' ,err.message);
    }
    console.log('Database connection ');
})