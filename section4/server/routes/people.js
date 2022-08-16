const express = require("express");
const router = express.Router();
const { people } = require("../people.json");

router.get("/", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

router.post("/", (req, res) => {
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

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const findPeople = people.find((person) => person.id === Number(id));

  if (!findPeople) {
    console.log("Not Found");
    return res
      .status(404)
      .json({ success: false, message: `no person found with id ${id}`});
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

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const findPeople = people.find((person) => person.id === Number(id));

  if (!findPeople) {
    console.log("Not Found");
    return res
      .status(404)
      .json({ success: false, message: `no person found with id ${id}` });
  } else {
    const newPeople = people.filter((person) => person.id !== Number(id));
    res
      .status(200)
      .json({
        success: true,
        message: "deleted successfully",
        data: newPeople,
      });
  }
});

module.exports = router;