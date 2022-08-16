const express = require("express");
const app = express();

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const year = new Date().toLocaleTimeString();
  console.log(method, url, year);
  next();
};

app.get("/", logger, (req, res) => {
  res.send(`Home`);
});

app.get("/about", logger, (req, res) => {
  res.send(`About`);
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running in port: ${port}`);
});
