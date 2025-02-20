// routes/scenarios.js

const express = require('express');
const router = express.Router();

// GET /scenarios
router.get('/', (req, res) => {
  res.render('pages/scenarios/index');
});

// Sub-routes for each scenario
router.get('/forex-scams', (req, res) => {
  res.render('pages/scenarios/forex-scams');
});

router.get('/stock-trading-scams', (req, res) => {
  res.render('pages/scenarios/stock-trading-scams');
});

router.get('/cryptocurrency-scams', (req, res) => {
  res.render('pages/scenarios/cryptocurrency-scams');
});

router.get('/blockchain', (req, res) => {
  res.render('pages/scenarios/blockchain');
});

router.get('/binary-options-scams', (req, res) => {
  res.render('pages/scenarios/binary-options-scams');
});

router.get('/romance-scams', (req, res) => {
  res.render('pages/scenarios/romance-scams');
});

router.get('/pig-butchering-scam', (req, res) => {
  res.render('pages/scenarios/pig-butchering-scam');
});

router.get('/job-scam', (req, res) => {
  res.render('pages/scenarios/job-scam');
});

router.get('/task-scam', (req, res) => {
  res.render('pages/scenarios/task-scam');
});

router.get('/fake-trading-scam', (req, res) => {
  res.render('pages/scenarios/fake-trading-scam');
});

router.get('/online-dating-scam', (req, res) => {
  res.render('pages/scenarios/online-dating-scam');
});

router.get('/phishing-scam', (req, res) => {
  res.render('pages/scenarios/phishing-scam');
});

router.get('/wallet-poisoning-scam', (req, res) => {
  res.render('pages/scenarios/wallet-poisoning-scam');
});

module.exports = router;
