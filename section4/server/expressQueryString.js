const express = require("express");
const app = express();
const { personDetails } = require("./Example.json");

app.get("/", (req, res) => {
  res.json(personDetails);
});

app.get("/personDetails/api/v1/query", (req, res) => {
  let sortedDetails = [...personDetails];

  const { search, limit } = req.query;

  if (search) {
    sortedDetails = sortedDetails.filter((person) => {
      return person.name.toLowerCase().includes(search);
    });
  }
  if (limit) {
    sortedDetails = sortedDetails.slice(0, Number(limit));
  }

  if (sortedDetails.length < 1) {
    return res.status(200).json([{ success: true, data: [] }]);
  }

  res.status(200).json(sortedDetails);
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is started in port: ${port}`);
});
