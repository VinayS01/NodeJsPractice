const express = require("express");
const app = express();
const {personDetails} = require("./Example.json");

app.get("/", (req, res) => {
  const newData = personDetails.map((person) => {
    const { name, age, isEmployed, sex } = person;
    return {
      name,
      age,
      isEmployed,
      sex,
    };
  });
  res.json(newData);
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is started in port: ${port}`);
});
