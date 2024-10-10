const Quote = require('../models/quote');

// obtener todas las citas
exports.getQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find();
    res.status(200).json(quotes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// obtener cita por id
exports.getQuoteById = async (req, res) => {
  try {
    const quote = await Quote.findById(req.params.id);
    if (!quote) {
      res.status(404).json({ message: 'Quote not found' });
    }

    res.status(200).json(quote);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// crear nueva cita
exports.createQuote = async (req, res) => {
  const { text, text_or, author, source, image } = req.body;

  const quote = new Quote({ 
    text,
    text_or,
    author,
    source,
    image,
  });

  try {
    const newQuote = await quote.save();
    res.status(200).json(newQuote);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};    


// actualizar cita
exports.updateQuote = async (req, res) => {
  try {
    const updatedQuote = await Quote.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if(!updatedQuote) {
      res.status(404).json({ message: 'Quote not found' });
    }
    res.status(200).json(updatedQuote);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// eliminar cita
exports.deleteQuote = async (req, res) => {
  try {
    const deletedQuote = await Quote.findByIdAndDelete(req.params.id);
    if (!deletedQuote) {
      res.status(404).json({ message: 'Quote not found' });
    }
    res.status(200).json({ message: 'Quote deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// obtener una cita random
exports.getQuoteOfTheDay = async (req, res) => {
  try {
    const quotes = await Quote.find()

    if (!quotes || quotes.length === 0) {
      return res.status(404).json({ message: 'Quotes not found' });
    }

    const randomQuote = Math.floor(Math.random() * quotes.length);
    const quoteOfTheDay = quotes[randomQuote];

    res.status(200).json(quoteOfTheDay);

  } catch (err) {
    res.status(500).json({ message: 'Quote not found' });
  }
}


