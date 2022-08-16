const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("./public"));


app.get("/", (req, res) => {
  console.log(req.url)
  res.sendFile(path.resolve(__dirname, "./HomePage.html"));
});


app.all("*", (req, res) => {
  res.status(404).send("<h1>Page does not exists</h1>");
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is started in port:${port}`);
});
