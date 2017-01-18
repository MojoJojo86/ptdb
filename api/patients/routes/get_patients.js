
const express = require('express');
const mongoose = require('mongoose');
const Patient = require('../model/Patient');
const router = express.Router();

router.route('/')
  .get((req, res) => {

    Patient.find({}, (err, patients) => {
      if (err) {
        res.status(400).json(err);
      }
      res.json(patients);
    });
    
  });

module.exports = router;