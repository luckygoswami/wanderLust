const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.get("/", (req, res) => {
    res.send("root page");
});

app.listen(8080, () => {
    console.log("listening to port 8080");
});
