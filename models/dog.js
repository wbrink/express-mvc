const orm = require("../config/orm");

const dog = {
  selectAll: function(cb) {
    orm.select("*", "dogs", (result) => {
      cb(result);
    });
  },

  selectAllWhere: function(cb) {
    orm.selectWhere(["name", "breed"], "dogs", "age", 10, (result) => {
      cb(result);
    });
  } 
}


module.exports = dog;