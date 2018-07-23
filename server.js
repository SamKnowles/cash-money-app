const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressJWT = require('express-jwt');
const PORT = process.env.PORT || 6000;

const app = express();
require('dotenv').config();


mongoose.connect('mongodb://localhost/budget',
 (err) => {
    if (err) throw err;
    console.log('Connected to Mongo');
});

app.use(bodyParser.json());
app.use('/auth', require('./routes/auth'));
app.use('api/cost', require('./routes/cost'));

app.listen(PORT, () => {
    console.log(`[+] App is listening on port ${PORT}`);
});
