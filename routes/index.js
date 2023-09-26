const express = require("express");

// Import our modular routers
const notesRouter = require("./notes");

const app = express();

app.use("/notes", notesRouter);

module.exports = app;
