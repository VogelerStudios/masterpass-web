const express = require('express');
const connectDB = require('./config/db');
const app = express();
// Connect Database
connectDB();

app.use(express.json());

//Routes
const routes = require('./routes/userR');
app.use('/api',routes);

app.get('/', (req, res) => res.send('Hello World!'));

const port =  process.env.PORT || 3000;

app.listen(port, ()=> console.log(`Server running on port ${port}`));
