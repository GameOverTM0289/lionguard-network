// routes/qa.js

const express = require('express');
const router = express.Router();

// GET /qa
router.get('/', (req, res) => {
  res.render('pages/qa');
});

module.exports = router;
