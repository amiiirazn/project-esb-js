
const express = require('express');
const testRoutes = require('./routes/routes');
const errorHandler = require('./middlewares/errorhandler');

const app = express();

app.use(express.json());

app.use('/api/test', testRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;