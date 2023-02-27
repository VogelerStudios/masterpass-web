const connectDB = require('./config/db');
const express = require('express');
const app = express();
app.use(express.json());

// Connect Database
connectDB();

//Route User
const userRoute = require('./routes/userRoute');
app.use('/user',userRoute);

//Route event
const eventRoute = require('./routes/eventRoute');
app.use('/event',eventRoute);

//Route ticket
const ticketRoute = require('./routes/ticketRoute');
app.use('/ticket',ticketRoute);

//Show in browser
app.get('/', (req, res) => res.send('Get Root'));

const port =  process.env.PORT || 3000;

app.listen(port, ()=> console.log(`Server running on port ${port}`));
