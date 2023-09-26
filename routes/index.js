const express = require("express");

// Import our modular routers for /tips and /feedback
const notesRouter = require("./notes");

const app = express();

app.use("/notes", notesRouter);

module.exports = app;
