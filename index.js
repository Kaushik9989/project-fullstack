const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/newlisting.js")
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderLust";
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname,"/public")));
main().then(()=>{
    console.log("Connected to DB");
}).catch(err=>{console.log(err)});

async function main() {
    await mongoose.connect(MONGO_URL);
}
app.get("/",(req,res)=>{
    res.send("Working");
})
//INDEX ROUTE
app.get("/listings",async(req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/listing.ejs",{allListings});
});
//CREATE ROUTE
app.get("/listings/new",(req,res)=>{
    res.render("listings/newList.ejs");
});
// SHOW ROUTE
app.get("/listings/:id",async(req,res)=>{
    const {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/showlisting.ejs",{listing});
});
//CREATE ROUTE
app.post("/listings",async(req,res)=>{
    const newlisting = new Listing(req.body.listing);
    
    await newlisting.save();
    res.redirect("/listings");
})
// EDIT ROUTE
app.get("/listings/:id/edit",async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/editlisting.ejs",{listing});
})
// UPDATE ROUTE
app.put("/listings/:id",async(req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);
})
// DELETE ROUTE
app.delete("/listings/:id",async(req,res)=>{
    let {id}=req.params;
   let deletedList= await Listing.findByIdAndDelete(id);
   console.log(deletedList); 
   res.redirect("/listings");
})
// app.get("/testListing",(req,res)=>{
//     const Listing1 = new Listing({
//         title:"My new Home",
//         description:"Wonderful Place",
//         price:200
//     })
//     Listing1.save();
//     console.log("Saved");
//     res.send("Successfully tested");
// })

app.listen(8080,()=>{
    console.log("Listening on port 8080");
})