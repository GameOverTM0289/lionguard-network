// routes/bountyHotline.js

const express = require('express');
const router = express.Router();

// GET /bounty-hotline
router.get('/', (req, res) => {
  res.render('pages/bounty-hotline');
});

module.exports = router;
