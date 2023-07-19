const express = require('express');
const cors = require('cors');
const app = express();
const dbConfig = require('./db')
const rooomsRoute = require('./Route/roomsRoute');
const usersRoute = require('./Route/userRoute')

app.use(cors("*"));
app.use(express.json())
app.use('/api/rooms', rooomsRoute )
app.use('/api/users', usersRoute )



  
 

const port = process.env.PORT || 5001;

app.listen(port ,()=>console.log('server iss started') );