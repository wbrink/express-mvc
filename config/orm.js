const connection = require("./connection");

// ?? are for swapping out table or column names
// ? are used for swapping out values
// we use these to avoid sql injection attacks
const orm = {
  select: function(whatToSelect, tablename, cb) {
    const queryString = "SELECT ?? FROM ??;"
    const placeholder = [whatToSelect, tablename];
    connection.query(queryString, placeholder, (error, results) => {
      if (error) throw error;
      cb(results);
    });
  },
  
  selectWhere: function(whatToSelect, tablename, colToSearch, valOfCol,cb) {
    const queryString = "SELECT ?? FROM ?? WHERE ?? = ?;"
    const placeholder = [whatToSelect, tablename, colToSearch, valOfCol];
    connection.query(queryString, placeholder, (error, results) => {
      if (error) throw error;
      cb(results);
    });
  }
}


module.exports = orm;