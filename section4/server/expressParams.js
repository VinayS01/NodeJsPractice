const express = require("express");
const app = express();
const { personDetails } = require("./Example.json");

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

app.get("/person/:productId", (req, res) => {
  // console.log(req, "req");
  // console.log("req.params", req.params);
  const { productId } = req.params;
  const findPerson = personDetails.find(
    (person) => person.id === Number(productId)
  );
  if (findPerson) {
    res.json(findPerson);
  } else {
    res.send("<h1>No person data found</h1>")
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is started in port: ${port}`);
});
