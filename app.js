const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

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

// app.get("/testlisting", async (req, res) => {
//     let sampleListing = new Listing({
//         title: "my new villa",
//         description: "by the beach",
//         price: 500,
//         location: "Goa",
//         country: "India",
//     });
//     await sampleListing.save();
//     console.log("sample saved");
//     res.send("successful");
// });

// Index route
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
});

// Show route
app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
});

app.listen(8080, () => {
    console.log("listening to port 8080");
});
