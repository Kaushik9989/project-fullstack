const express = require("express");
const router = express.Router();
const ExpressError = require("../utils/expressError.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema } = require("../schema.js");
const Listing = require("../models/newlisting.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listing.js");
const multer  = require('multer')
const {storage} = require('../cloudConfig.js');
const upload = multer({storage });
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse URL-encoded data (e.g., from forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (optional, if you have CSS/JS files)
app.use(express.static('public'));
// JOI LISTING SERVER SIDE VALIDATION

//INDEX ROUTE(SHOWS ALL LISTINGS)
//CREATE POST ROUTE(DB INSERTING)

router.get("/search",wrapAsync(listingController.getByLocation));
router.get("/category/:name",wrapAsync(listingController.viewCategory));
router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.createListing)
  );

//CREATE GET ROUTE(FORM RENDER)

router.get("/new", isLoggedIn, wrapAsync(listingController.renderNewForm));

router
  .route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(
    isLoggedIn,
    isOwner,
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));


// SHOW ROUTE(INDIVIDUAL LISTING)


// EDIT ROUTE (EDIT FORM)

router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditform)
);

// UPDATE ROUTE (DB UPDATION)



// DELETE ROUTE(FROM DB)

module.exports = router;
