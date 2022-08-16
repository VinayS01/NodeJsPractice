const express = require("express");
const app = express();
const { people } = require("./people.json");

app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;

  const findPeople = people.find((person) => person.id === Number(id));

  if (!findPeople) {
    console.log("Not Found");
    return res
      .status(404)
      .json({ success: false, message: `no person found with id ${id}` });
  } else {
    const newPeople = people.filter((person) => person.id !== Number(id));
    res.status(200).json({ success: true, message: "deleted successfully", data: newPeople });
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`server is started in the port: ${port}`);
});
