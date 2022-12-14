const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReferenceSchema = new Schema({
  name: { type: String, required: true, maxLength: 20 },
  url: { type: String, required: true },
});

module.exports = mongoose.model('Reference', ReferenceSchema);
