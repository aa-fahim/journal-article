const LogEntry = require("../models/model.js");

// Create and Save a new LogEntry
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a log entry
    const logEntry = new LogEntry({
      ProductName: req.body.ProductName,
      LogId: req.body.LogId,
      DateIn: req.body.DateIn,
      DateOut: req.body.DateOut,
      EmployeeIn: req.body.EmployeeIn,
      EmployeeOut: req.body.EmployeeOut
    });
  
    // Save User in the database
    LogEntry.create(logEntry, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
      else res.send(data);
    });
};

exports.findOne = (req, res) => {
  LogEntry.findByLogId(req.params.logId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found log entry with log Id ${req.params.logId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving log entry with log Id " + req.params.logId
          });
        }
      } else res.send(data);
    });
};

exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    LogEntry.updateByLogId(
      req.params.logId,
      new LogEntry(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found log entry with log id ${req.params.logId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating log entry with log id " + req.params.logId
            });
          }
        } else res.send(data);
      }
    );
};


exports.delete = (req, res) => {
    LogEntry.remove(req.params.logId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found log entry with log id ${req.params.logId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete log entry with log id " + req.params.logId
          });
        }
      } else res.send({ message: `Log entry was deleted successfully!` });
    });
};

exports.findWithinDateRange = (req, res) => {
  LogEntry.findByDateRange(req.params.dateRange, (err, data) => {
    if (err) {
      if (err.kind === "not_found"){
        res.status(404).send({
          message: `Not found any log entries within date range ${req.params.dateRange}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving entries with date range of" + req.params.logId
        })
      }
    } else res.send(data)
  })
}
