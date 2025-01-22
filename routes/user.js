const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { savedRedirectedUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");
//SIGNUP FORM
router
  .route("/signup")
  .get(userController.renderSignupFORM)
  .post(wrapAsync(userController.singUpUser));
router
  .route("/login")
  .get(userController.renderLoginForm)
  .post(
    savedRedirectedUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userController.loginUser
  );

//LOGOUT FUNCTIONALITY

router.get("/logout", userController.logoutUser);

module.exports = router;
