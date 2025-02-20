// routes/services.js

const express = require('express');
const router = express.Router();

// GET /services
router.get('/', (req, res) => {
  res.render('pages/services/index');
});

router.get('/crypto-investigation', (req, res) => {
  res.render('pages/services/crypto-investigation');
});

router.get('/blockchain-forensic', (req, res) => {
  res.render('pages/services/blockchain-forensic');
});

router.get('/blockchain-analyst', (req, res) => {
  res.render('pages/services/blockchain-analyst');
});

router.get('/asset-recovery-solutions', (req, res) => {
  res.render('pages/services/asset-recovery-solutions');
});

module.exports = router;
