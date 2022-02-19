require("dotenv").config();
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();
const PORT = +process.env.PORT || 3001;

app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.use(routes);

app.listen(PORT, () => {
  console.log('running on port:', PORT)
});