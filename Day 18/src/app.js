const express = require('express');
const app = express();
const authRouter = require('./routes/auth.routes');

app.use(express.json());

app.use('/auth', authRouter);

module.exports = app;