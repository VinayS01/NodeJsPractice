const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log(`homePage`);
  res.status(200).send("<h1>Welcome to ExpressJS Homepage</h1>");
});

app.get("/about", (req, res) => {
  console.log(`about`);
  res.status(200).send("<h1>This is about page</h1>");
});

app.all("*", (req, res) => {
  console.log(`not found`);
  res.status(404).send("<h1>Page does not exist</h1>");
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is started in port:${port}`);
});
