const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  hosp_num: { type: String, required: true },
  consultant: { type: String, required: true },
  treat_site: { type: String, required: true },
  treat_group: { type: Number, required: true }

});

module.exports = mongoose.model('Patient', PatientSchema);