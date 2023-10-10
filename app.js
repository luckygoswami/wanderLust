const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => {
        console.log("connected to db");
    })
    .catch((err) => {
        console.log(`there's an error`);
    });

async function main() {
    await mongoose.connect(mongo_url);
}

app.get("/", (req, res) => {
    res.send("root page");
});

app.get("/testlisting", async (req, res) => {
    let sampleListing = new Listing({
        title: "my new villa",
        description: "by the beach",
        price: 500,
        location: "Goa",
        country: "India",
    });
    await sampleListing.save();
    console.log("sample saved");
    res.send("successful");
});

app.listen(8080, () => {
    console.log("listening to port 8080");
});
