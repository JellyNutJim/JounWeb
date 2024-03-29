// src/server.js

const express = require('express')
const dataRoutes = require('./routes/dataRoutes')

const cors = require('cors');

const app = express()
const port = 3000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', dataRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})