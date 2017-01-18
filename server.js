'use strict'

const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // req.body
const cors = require('cors'); // 8080
const mongoose = require('mongoose');
const uriUtil= require('mongodb-uri');
let patients = require('./data');

const mongodbUri = 'mongodb://wphuser:monkey@ds056009.mlab.com:56009/pt-db';
const mongooseUri = uriUtil.formatMongoose(mongodbUri);
const dbOptions = {};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());

app.use('/api/patients', require('./api/patients/routes/post_patient'));
app.use('/api/patients', require('./api/patients/routes/get_patients'));
app.use('/api/patients', require('./api/patients/routes/get_patient'));
app.use('/api/patients', require('./api/patients/routes/put_patient'));
app.use('/api/patients', require('./api/patients/routes/delete_patient'));


const hostname = 'localhost';
const port = 3001;


app.listen(port, hostname, () => {

  mongoose.connect(mongooseUri, dbOptions, (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Server is now running!');
  });
});