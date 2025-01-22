const User = require("../models/user.js");

module.exports.renderSignupFORM=(req, res) => {
    res.render("users/signup.ejs");
  }

module.exports.singUpUser = async (req, res) => {
    try {
      let { username, email, password } = req.body;
      const newUser = new User({ username, email });
      let registeredUser = await User.register(newUser, password);
      req.login(registeredUser, (err) => {
        if (err) {
          return next(err);
        }
        req.flash("success", `Welcome to WanderLust ${req.user.username}`);
        res.redirect("/listings");
      });
      //console.log(registeredUser);
    } catch (e) {
      req.flash("error", e.message);
      res.redirect("/signup");
    }
  }
  module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
  }


module.exports.loginUser = (req, res) => {
    req.flash("success",`Welcome back ${req.user.username}`);
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
  }

module.exports.logoutUser = (req, res, next) => {
    req.logout((err) => {
      if (err) {
        next(err);
      }
      req.flash("success", "Logged out Successfully!");
      res.redirect("/listings");
    });
  }