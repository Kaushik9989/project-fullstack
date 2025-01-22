const mongoose = require("mongoose");
const Listing = require("../models/newlisting.js");
const listingData = require("./data.js");
const newListingData = require("./newData.js");
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderLust";
main().then(()=>{
    console.log("Connected to DB");
}).catch(err=>{console.log(err)});

async function main() {
    await mongoose.connect(MONGO_URL);
};
const initDB= async ()=>{

    await Listing.deleteMany({});
    listingData.data = listingData.data.map((obj)=>({...obj,owner:"67896a7cb9652e6f8ac0187d"}));
    await Listing.insertMany(listingData.data);
    console.log("Data intialized");
}
initDB();