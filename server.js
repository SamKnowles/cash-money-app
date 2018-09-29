require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const expressJWT = require("express-jwt");
const morgan = require ("morgan");
const path = require("path");
const PORT = process.env.PORT || 5001;

const app = express();

mongoose.connect("mongodb://localhost:27017/budget",
(err) => {
    if (err) throw err;
    console.log("Connected to Mongo");
});

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client", "build")))

app.use("/api", expressJWT({secret: process.env.SECRET}))
app.use("/api/profile", require("./routes/profile"));
app.use("/api/budget", require("./routes/budget"));
app.use("/auth", require("./routes/auth"));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
    console.log(`[+] App is listening on port ${PORT}`);
});
