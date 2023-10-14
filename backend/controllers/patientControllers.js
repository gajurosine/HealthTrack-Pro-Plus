
const Patient =  require('../models/Patient');

const sqlite3 = require('sqlite3').verbose();


const dbPath = 'healthmonitoring.db';
   viewMyData= (req, res) => {

    const patientID = req.params.patientID;
    const db = new sqlite3.Database(dbPath);

    const query = 'SELECT * FROM patients WHERE patientID = ?';
    db.get(query, [patientID], (err, row) => {
      if (err) {

        console.error('Error while retrieving patient data:', err);
        res.status(500).json({ message: 'Data retrieval failed' });
      } else if (row) {

        res.json(row);
      } else {

        res.status(404).json({ message: 'Patient not found' });
      }

      db.close((err) => {
        if (err) {
          console.error('Error while closing the database:', err);
        }
      });
    });
  }

// module.exports = {viewMyData};
