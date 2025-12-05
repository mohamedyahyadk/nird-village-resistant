const passport = require("passport");

exports.authRequired = passport.authenticate("jwt", { session: false });

exports.roleRequired = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role))
      return res.status(403).json({ msg: "Access denied" });
    next();
  };
};
