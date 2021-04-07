module.exports = (app) => {
  const logEntry = require("../controllers/controller.js");
  const retrieveJournal = require("../controllers/retrieveJournal.js");

  // Create a new Log Entry
  app.post("/logEntry", logEntry.create);

  // Retrieve a single Log Entry with log Id
  app.get("/logEntry/:logId", logEntry.findOne);

  // Update a Log Entry with log Id
  app.put("/logEntry/:logId", logEntry.update);

  // Delete a Log Entry with log Id
  app.delete("/logEntry/:logId", logEntry.delete);

  app.post("/journal-article", retrieveJournal.retrieveJournal);
};
