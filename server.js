import express from 'express';
import { json, urlencoded } from 'express';
import adminRoutes from './routes/adminRouters.js';
import patientRoutes from './routes/patientRouters.js';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = 7000;
const corsOptions = {
  origin: true,
  credentials: true,
};
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello, welcome to the HealthTrack-Pro-Plus API!');
});
app.use(cors(corsOptions));
app.use('/admin', adminRoutes);
app.use('/patient', patientRoutes);

app.get('/login', (req, res) => {
  res.sendFile('login.html', { root: __dirname + '/public' });
});
app.get('/admin/patients', (req, res) => {
  console.log('received get request');
  const query = 'SELECT * FROM patients'; 

  connection.query(query, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});
app.listen(port, () => {
  console.log(`The app is running on port ${port}`);
});
