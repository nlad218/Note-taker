const router = require("express").Router();
const {
  readAndAppend,
  readFromFile,
  readAndRemove,
} = require("../helpers/fsUtils");
const uuid = require("../helpers/uuid");

// GET Route for retrieving all the feedback
router.get("/", (req, res) =>
  readFromFile("./db/notes.json").then((data) => res.json(JSON.parse(data)))
);

// POST Route for submitting feedback
router.post("/", (req, res) => {
  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save
    const newNotes = {
      title,
      text,
      id: uuid(),
    };

    readAndAppend(newNotes, "./db/notes.json");

    const response = {
      status: "success",
      body: newNotes,
    };

    res.json(response);
  } else {
    res.json("Error in posting note");
  }
});

router.delete("/:id", (req, res) => {
  readAndRemove(req.params.id, "./db/notes.json");

  res.json("deleted");
});

module.exports = router;
