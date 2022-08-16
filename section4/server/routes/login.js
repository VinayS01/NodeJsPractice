const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(200).send(`<h1>Welcome ${name}</h1>`);
  } else {
    res.status(401).send(`<h3>Please enter the name</h3>`);
  }
});

module.exports = router;