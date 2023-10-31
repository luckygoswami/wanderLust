const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js");

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

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "653fdab3f99728282fa8fbba" }));
    await Listing.insertMany(initData.data);
    console.log("data initialized");
};

initDB();
