// routes/index.js

const express = require('express');
const router = express.Router();

// GET /
router.get('/', (req, res) => {
  res.render('pages/home'); 
  // Layout = layout.ejs by default, injecting 'pages/home.ejs' content into <%- body %>
});

module.exports = router;
