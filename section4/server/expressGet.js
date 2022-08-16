const express = require("express");
const app = express();
const { personDetails } = require("./Example.json");

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: personDetails });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running in port: ${port}`);
});
