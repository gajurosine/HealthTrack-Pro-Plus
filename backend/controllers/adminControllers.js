const Admin = require('../models/Admin');
const sqlite3 = require('sqlite3').verbose();
const dbPath = 'healthmonitoring.db';

// const adminController = {
  exports.register =  (req, res) => {
    const { username, password } = req.body;
    const db = new sqlite3.Database(dbPath);

    const insertQuery = 'INSERT INTO admin (username, password) VALUES (?, ?)';
    db.run(insertQuery, [username, password], (err) => {
      if (err) {
        console.error('Error during admin registration:', err);
        res.status(500).json({ message: 'Registration failed' });
      } else {
        res.json({ message: 'Registration successful' });
      }

      db.close((err) =>{
        if (err) {
          console.error('Error while closing the database:', err);
        }
      });
    },
  )}



