const express = require('express');
const cors = require('cors');
const postRoutes = require('./routes/postRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/posts', postRoutes);

// Global error handler
app.use(errorHandler);

module.exports = app;
