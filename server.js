// server.js

const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const PORT = process.env.PORT || 3000;

// Database config (stub - fill later with MongoDB Atlas connection)
require('./config/db');

// Middleware: parse request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set the public folder for static assets
app.use(express.static(path.join(__dirname, 'public')));

// EJS + Layouts
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout'); 
// ^ This means all res.render() calls will inject content into layout.ejs by default.

// Routes
const indexRoutes = require('./routes/index');
const aboutRoutes = require('./routes/about');
const bountyHotlineRoutes = require('./routes/bountyHotline');
const qaRoutes = require('./routes/qa');
const contactRoutes = require('./routes/contact');
const scenariosRoutes = require('./routes/scenarios');
const servicesRoutes = require('./routes/services');

app.use('/', indexRoutes);
app.use('/about', aboutRoutes);
app.use('/bounty-hotline', bountyHotlineRoutes);
app.use('/qa', qaRoutes);
app.use('/contact', contactRoutes);
app.use('/scenarios', scenariosRoutes);
app.use('/services', servicesRoutes);

app.listen(PORT, () => {
  console.log(`LionGuard Network is running at http://localhost:${PORT}`);
});
