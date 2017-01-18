const express = require('express');
const mongoose = require('mongoose');
const Patient = require('../model/Patient');
const router = express.Router();

router.route('/:hosp_num')
  .get((req, res) => {

    const hospNum = req.params.hosp_num;

    Patient.findOne({ hospNum }, (err, patient) => {
      if (err) {
        res.status(400).json(err);
      }
      if (!patient) {
        res.status(404).json({ message: 'Patient not found.' });
      }

      res.json(patient);
    });
    
  });

module.exports = router;