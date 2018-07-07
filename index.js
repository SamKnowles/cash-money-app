const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/budget', () => {
    console.log('Connected to Mongo');
})

app.listen(3000, () => {
    console.log('App is listening on port 3000!');
});
