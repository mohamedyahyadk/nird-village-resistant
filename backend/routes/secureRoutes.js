const express = require("express");
const router = express.Router();
const { authRequired, roleRequired } = require("../middleware/auth");

// Example — Only logged-in users
router.get("/profile", authRequired, (req, res) => {
  res.json({ msg: "Success", user: req.user });
});

// Example — Only ADMIN or TEACHER
router.get(
  "/admin-panel",
  authRequired,
  roleRequired("ADMIN", "TEACHER"),
  (req, res) => {
    res.json({ msg: "Welcome to admin panel" });
  }
);

module.exports = router;
