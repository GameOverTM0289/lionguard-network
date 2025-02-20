// routes/about.js

const express = require('express');
const router = express.Router();

// GET /about
router.get('/', (req, res) => {
  res.render('pages/about');
});

module.exports = router;
