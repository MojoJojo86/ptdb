const express = require('express');
const mongoose = require('mongoose');
const Patient = require('../model/Patient');
const router = express.Router();

router.route('/')
  .post((req, res) => {

    const patient = new Patient(req.body);

    patient.save((err, patient) => {
      if (err) {
        res.status(400).json(err);
      }
      res.json(patient);
      // res.json({ message: 'Patient saved! '});
    });
    
  });

module.exports = router;