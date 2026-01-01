const mongoose = require('mongoose');

const NoticeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

// Use this check to prevent "Notice is not a constructor"
const Notice = mongoose.models.Notice || mongoose.model('Notice', NoticeSchema);
module.exports = Notice;