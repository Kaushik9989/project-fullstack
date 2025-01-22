const Listing = require("../models/newlisting.js");
const { listingSchema } = require("../schema.js");
const ExpressError = require("../utils/expressError.js");
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

module.exports.index=async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/listing.ejs", { allListings });
  }

module.exports.renderNewForm=  (req, res) => {
  res.render("listings/newList.ejs");
};

module.exports.showListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing does not exist or got deleted!");
    res.redirect("/listings");
  }
 // console.log(listing);
  res.render("listings/showlisting.ejs", { listing });
}

module.exports.createListing = async (req, res) => {
  //map
  let url = req.file.path;
  let filename = req.file.filename;
  const newlisting = new Listing(req.body.listing);
  newlisting.owner = req.user._id;
  newlisting.image = {url,filename};
  await newlisting.save();
 // console.log(url ,"..",filename);
  req.flash("success", "Created new Listing!");
  res.redirect("/listings");
};

module.exports.renderEditform = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", "Listing does not exist or got deleted!");
      res.redirect("/listings");
    }

    let imageUrl = listing.image.url;
    let newimageUrl = imageUrl.replace("/upload","/upload/h_300,w_250")
    res.render("listings/editlisting.ejs", { listing,newimageUrl });
  }

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  if(typeof req.file !== "undefined"){
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = {url,filename};
    await listing.save();

  }
  req.flash("success", "Updated the Listing!");
  res.redirect(`/listings/${id}`);
}

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deletedList = await Listing.findByIdAndDelete(id);
  console.log(deletedList);
  req.flash("success", "Deleted the Listing!");
  res.redirect("/listings");
}
module.exports.viewCategory = async(req,res)=>{
  let {name}=req.params;
  let listing = await Listing.find({category:name});
  res.render("listings/showCategorylisting.ejs", { listing });
};  

module.exports.getByLocation = async(req, res) => {
  const location = req.query.location; // Access the 'location' field from the form
  let listing = await Listing.find({country:location});
  console.log(listing);
  res.render("listings/showSearch.ejs",{listing});
};