const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

//DB

const mongoDB = process.env.MONGO_URI;
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(mongoDB, mongoOptions, () =>
  console.log('Connection Successful')
);

const db = mongoose.connection;

db.on(
  'error',
  console.error.bind(console, 'Error while connecting to the database')
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Admin

//MVC

require('./config/passport');

app.listen(port, () => console.log(`Listening on ${port}`));
