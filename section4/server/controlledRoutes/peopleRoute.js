const express = require("express");
const router = express.Router();
const {
  getPeople,
  createPerson,
  updatePerson,
  deletePerson,
} = require("../controllers/peopleController");

// first Approach
// router.get("/", getPeople);
// router.post("/", createPerson);
// router.put("/:id", updatePerson);
// router.delete("/:id", deletePerson);

// second approach
router.route("/").get(getPeople);
router.route("/").post(createPerson);
router.route("/:id").put(updatePerson);
router.route("/:id").delete(deletePerson);

module.exports = router;
