const express = require("express");
const app = express();
const logger = require("./logger");

app.use("/api",logger);

app.get("/", (req, res) => {
  res.send(`Home`);
});

app.get("/about", (req, res) => {
  res.send(`About`);
});

app.get("/api/products", (req, res) => {
  res.send(`products`);
});

app.get("/api/items", (req, res) => {
  res.send(`items`);
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running in port: ${port}`);
});
