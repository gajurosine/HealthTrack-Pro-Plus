import sqlite3 from 'sqlite3';

const dbPath = 'healthmonitoring.db';

export const register = (req, res) => {
  try {
    const { username, password } = req.body;
    const db = new sqlite3.Database(dbPath);
    const insertQuery = 'INSERT INTO admin (username, password) VALUES (?, ?)';
    const selectQuery = 'SELECT * FROM admin WHERE username = ?';

    db.run(insertQuery, [username, password], (err) => {
      if (err) {
        console.error('Error during admin registration:', err);
        res.status(500).json({ message: 'Registration failed' });
      } else {
        db.get(selectQuery, [username], (err, row) => {
          if (err) {
            console.error('Error while verifying registration:', err);
            res.status(500).json({ message: 'Registration failed' });
          } else if (row) {
            res.json({ message: 'Registration successful' });
          } else {
            res.status(500).json({ message: 'Registration verification failed' });
          }
        });
      }

      db.close((err) => {
        if (err) {
          console.error('Error while closing the database:', err);
        }
      });
    });
  } catch (error) {
    console.log('error occured: ', error)
  }
};

export const login = (req, res) => {
  const { username, password } = req.body;
  const db = new sqlite3.Database(dbPath);

  const selectQuery = 'SELECT * FROM admin WHERE username = ? AND password = ?';
  db.get(selectQuery, [username, password], (err, row) => {
    if (err) {
      console.error('Error during login:', err);
      res.status(500).json({ message: 'Login failed' });
    } else if (row) {
      res.json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }

    db.close((err) => {
      if (err) {
        console.error('Error while closing the database:', err);
      }
    });
  });
};


export const viewPatients = (req, res) => {
  const db = new sqlite3.Database(dbPath);

  const selectQuery = 'SELECT * FROM patients';
  db.all(selectQuery, (err, rows) => {
    if (err) {
      console.error('Error retrieving patients:', err);
      res.status(500).json({ message: 'Failed to retrieve patients' });
    } else {
      res.json({ patients: rows });
    }

    db.close((err) => {
      if (err) {
        console.error('Error while closing the database:', err);
      }
    });
  });
};
export default register;
