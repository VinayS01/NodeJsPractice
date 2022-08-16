const express = require("express");
const app = express();
const { people } = require("./people.json");

// parse json middleware
app.use(express.json());

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const findPeople = people.find((person) => person.id === Number(id));

  if (!findPeople) {
    console.log("Not Found");
    return res
      .status(404)
      .json({ success: false, message: `no person found with id ${id}` });
  } else {
    const newPeople = people.map((person) => {
      if (person.id === Number(id)) {
        person.name = name;
      }
      return person;
    });
    res.status(200).json({ success: true, data: newPeople });
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`server is started in the port: ${port}`);
});
