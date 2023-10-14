import express, { json, urlencoded } from 'express';
const app = express();
const port = 8000;

import adminRoutes from './routes/adminRouters';
import patientRoutes from './routes/patientRouters';

app.use(json());
app.use(urlencoded({extended:false}));


app.get('/admin' ,adminRoutes);
app.get('/patient' ,patientRoutes);

app.listen(port ,() =>{
    console.log(`thi app is running on port${port}`);

})

