const passport = require("passport");

const localStrategy = require("passport-local");
const userModel = require("../Models/userModel")

passport.use(new localStrategy(userModel.authenticate()));

exports.homepage = function (req, res, next) {
  res.send("index");
};

exports.Signuppage = function (req, res, next) {
  console.log(req.body);
};
