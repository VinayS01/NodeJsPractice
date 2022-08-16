const express = require("express");
const app = express();
const { people } = require("./People.json");

// static middleware
app.use(express.static("./methodPost"));

// urlencoded middleware
app.use(express.urlencoded({ extended: false }));

// parse json middleware
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res
      .status(400)
      .json({ success: false, msg: "please send any information" });
  } else {
    res.status(201).json({ success: true, person: name });
  }
});

app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ success: false, message: "please provide name" });
  } else {
    res.status(201).json({
      success: true,
      data: [...people, { id: Math.floor(Math.random() * 5000), name }],
    });
  }
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
