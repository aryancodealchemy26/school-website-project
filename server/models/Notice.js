const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

// Clear out any old cached models and export fresh
module.exports = mongoose.models.Notice || mongoose.model('Notice', noticeSchema);