const express = require('express');
const bodyParser = require('body-parser');
const testRoutes = require('./routes/test');
// const path = require('path');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

// app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api', testRoutes);

module.exports = app;