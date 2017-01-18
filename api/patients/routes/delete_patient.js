const express = require('express');
const mongoose = require('mongoose');
const Patient = require('../model/Patient');
const router = express.Router();

router.route('/:hosp_num')
  .delete((req, res) => {

    const hospNum = req.params.hosp_num;

    Patient.findOneAndRemove({ hospNum }, (err, patient) => {
      if (err) {
        res.status(400).json(err);
      }
      if (!patient) {
        res.status(404).json({ message: 'Patient not found.' });
      }
      res.json({ message: `Patient ${patient.hospNum} deleted.` });
    });

  });

module.exports = router;