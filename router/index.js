const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("Register");
});

router.get("/login", (req, res) => {
  res.render("Login");
});

module.exports = router;
