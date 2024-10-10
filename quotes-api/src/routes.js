const express = require('express');
const quoteController = require('./controllers/quoteController');

const router = express.Router();  

// definir rutas
router.get('/quotes', quoteController.getQuotes);
router.get('/quotes/today', quoteController.getQuoteOfTheDay);
router.get('/quotes/:id', quoteController.getQuoteById);
router.post('/quotes', quoteController.createQuote);
router.put('/quotes/:id', quoteController.updateQuote);
router.delete('/quotes/:id', quoteController.deleteQuote);

module.exports = router;