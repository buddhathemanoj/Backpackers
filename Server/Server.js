const express = require('express');
const cors = require('cors');
const app = express();
const dbConfig = require('./db')
const rooomsRoute = require('./Route/roomsRoute');


app.use(cors("*"));
app.use(express.json())
app.use('/api/rooms', rooomsRoute )


  
 

const port = process.env.PORT || 5001;

app.listen(port ,()=>console.log('server iss started') );