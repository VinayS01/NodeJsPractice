const express = require("express");
const app = express();
const { personDetails } = require("./Example.json");

// static middleware
app.use(express.static("./methodPost"));

// urlencoded middleware
app.use(express.urlencoded({ extended: false }));

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: personDetails });
});



app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(200).send(`<h1>Welcome ${name}</h1>`);
  } else {
    res.status(401).send(`<h3>Please enter the name</h3>`);
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running in port: ${port}`);
});
