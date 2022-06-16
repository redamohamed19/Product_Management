const proucttyperoute = require('./routes/producttypeRoute');
const Productrouter = require('./routes/productRoute')
const AttributeRouter = require('./routes/AttributeRouter')
const assignedAttributeRouter = require('./routes/assignedattributesroute')

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
var cors = require('cors')



const mongoString = process.env.ATLAS_URI;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app = express();
app.use(cors())
app.use(express.json());
app.use('/product', Productrouter)
app.use('/producttype', proucttyperoute)
app.use('/Attribute', cors(),AttributeRouter)
app.use('/assigned', cors(),assignedAttributeRouter)


app.listen(8000, () => {
    console.log(`Server Started at ${8000}`)
})