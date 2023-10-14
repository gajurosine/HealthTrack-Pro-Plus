import Patient from '../models/Patient.js';
import sqlite3 from 'sqlite3';

const dbPath = 'healthmonitoring.db';
export const viewMyData = (req, res) => {
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
};
export const addPatient = (req, res) => {
  const { nationalID, patientName, heartRate, temperature } = req.body;
  const db = new sqlite3.Database(dbPath);

  const insertQuery = 'INSERT INTO patients (nationalID, patientName, heartRate, temperature) VALUES (?, ?, ?, ?)';
  db.run(insertQuery, [nationalID, patientName, heartRate, temperature], (err) => {
    if (err) {
      console.error('Error adding patient:', err);
      res.status(500).json({ message: 'Failed to add patient' });
    } else {
      res.json({ message: 'Patient added successfully' });
    }

    db.close((err) => {
      if (err) {
        console.error('Error while closing the database:', err);
      }
    });
  });
};

