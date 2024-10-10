const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
  text: { type: String, required: true },
  text_or: { type: String, required: false },
  author: { type: String, required: true },
  source: { type: String, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model('Quote', QuoteSchema);