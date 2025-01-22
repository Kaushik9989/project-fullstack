if(process.env.NODE_ENV !="production"){
  require('dotenv').config()
}

//MANDATORY
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

//DATABASE

const mongoose = require("mongoose");
//  const MONGO_URL = "mongodb://127.0.0.1:27017/wanderLust";
const dbUrl = process.env.ATLASDB_URL;

//ERROR
const ExpressError = require("./utils/expressError.js");

//SESSIONS,PASSPORT,STRATEGY
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

//ROUTERS
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

//EJS SETUP
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//SESSION OPTIONS
const store = MongoStore.create({
  mongoUrl:dbUrl,
  crypto:{
    secret:process.env.SECRET
  },
  touchAfter:24*3600,
});

store.on("error",()=>{
  console.log("ERROR IN MONGO SESSION STORE",err);
})
const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

//SESSION CREATION AND USER AUTHENTICATION
app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// FORM METHODS AND EJS
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

// DATABASE CONNECTION
main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(dbUrl);
}

//LOCALS FOR EJS
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

//ROUTERS
app.use("/listings", listingRouter);
app.use("/listings/:id/review", reviewRouter);
app.use("/",userRouter);

app.get("/terms",(req,res)=>{
  res.render("users/terms.ejs");
})
//ERROR TACKLING
app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page not found!"));
});
app.use((err, req, res, next) => {
  let { status = 500, message = "something went wrong!" } = err;
  res.status(status).render("listings/error.ejs", { message });
});

//LISTENING
app.listen(8080, () => {
  console.log("Listening on port 8080");
});
