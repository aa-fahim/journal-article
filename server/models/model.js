// constructor
const LogEntry = function (logEntry) {
  this.ProductName = logEntry.ProductName;
  this.LogId = logEntry.LogId;
  this.DateIn = logEntry.DateIn;
  this.DateOut = logEntry.DateOut;
  this.EmployeeIn = logEntry.EmployeeIn;
  this.EmployeeOut = logEntry.EmployeeOut;
};

/*
LogEntry.findByLogId = (logId, result) => {
    sql.query(`SELECT * FROM logentries WHERE LogId = ${logId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found log entry: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found LogEntry with the name
      result({ kind: "not_found" }, null);
    });
};
*/

module.exports = LogEntry;
