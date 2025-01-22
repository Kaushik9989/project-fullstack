const Listing = require("./models/newlisting.js");
const Review = require("./models/review.js");
const { listingSchema, reviewSchema } = require("./schema.js");
const ExpressError = require("./utils/expressError.js");


//CHECK WHETHER USER IS LOGGED IN OR NOT

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "Please login to Add Listings!");
    return res.redirect("/login");
  }
  next();
};

// TO GO TO THE SAME PATH AFTER LOGIN SCREEN


module.exports.savedRedirectedUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};


// LISTING AUTHORIZATION


module.exports.isOwner = async (req, res, next) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (
    res.locals.currUser &&
    !listing.owner._id.equals(res.locals.currUser._id)
  ) {
    req.flash("error", "You don't have permission for this listing!!");
    return res.redirect(`/listings/${id}`);
  }
  next();
};
//LISTING BACKEND VALIDATION JOI


module.exports.validateListing = (req, res, next) => {
  let validationResult = listingSchema.validate(req.body);
  if (validationResult.error) {
    let errMsg = validationResult.error.details
      .map((el) => el.message)
      .join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};
//REVIEW BACKEND VALIDATION JOI

module.exports.validateReview = (req, res, next) => {
  let validateREV = reviewSchema.validate(req.body);
  if (validateREV.error) {
    let errMSg = validateREV.error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMSg);
  } else {
    next();
  }
};

// REVIEW AUHTORIZATION


module.exports.isReviewAuthor = async (req, res, next) => {
  let { id, reviewId } = req.params;
  let review = await Review.findById(reviewId);
  if (
    res.locals.currUser &&
    !review.author._id.equals(res.locals.currUser._id)
  ) {
    req.flash("error", "You can't delete this review!!");
    return res.redirect(`/listings/${id}`);
  }
  next();
};
