const express = require('express');
const mongoose = require('mongoose');
const Patient = require('../model/Patient');
const router = express.Router();

router.route('/:hosp_num')
  .put((req, res) => {

    const hospNum = req.params.hosp_num;

    Patient.findOneAndUpdate({ hospNum },
      req.body,
      { new: true },
      (err, patient) => {
      if (err) {
        res.status(400).json(err);
      }
      res.json(patient);
    });

  });

module.exports = router;