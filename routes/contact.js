// routes/contact.js

const express = require('express');
const router = express.Router();

// GET /contact
router.get('/', (req, res) => {
  res.render('pages/contact');
});

// POST /contact
router.post('/', (req, res) => {
  // In the future, you could store req.body in MongoDB.
  console.log('Contact form data:', req.body);
  // For now, just send a placeholder response:
  res.send('Thank you for contacting LionGuard Network!');
});

module.exports = router;
