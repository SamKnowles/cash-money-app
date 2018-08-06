const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const expressJWT = require("express-jwt");
const morgan = require ("morgan");
const PORT = process.env.PORT || 6000;

const app = express();
require("dotenv").config();

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/budget",
 (err) => {
    if (err) throw err;
    console.log("Connected to Mongo");
});


app.use(morgan("dev"));
app.use(bodyParser.json());

app.use("/api", expressJWT({secret: process.env.SECRET}))
app.use("/api/profile", require("./routes/profile"));
app.use("/api/budget", require("./routes/budget"));
app.use("/auth", require("./routes/auth"));



app.listen(PORT, () => {
    console.log(`[+] App is listening on port ${PORT}`);
});
