///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose");
const Schema = mongoose.Schema
///////////////////////////////
// MODELS
////////////////////////////////
const IncidentSchema = new Schema({
  name: {type: String, required: true},
  date: {type: Date, required: true},
  fatalities: {type: Number, min: 0},
  injuries: {type: Number, min: 0},
  description: {type: String, required: true},
},{timestamps: true});

module.exports = mongoose.model("Incident", IncidentSchema);