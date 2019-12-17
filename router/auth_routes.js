const router = require("express").Router();
router.get("/Login", (req, res) => {
  res.render("Login");
});

module.exports = router;
