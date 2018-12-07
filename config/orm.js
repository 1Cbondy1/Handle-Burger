var connection = require("./connection.js");

var orm = {
  selectAll: function(colToSearch, tableInput) {
    var queryString = "SELECT ?? FROM ??";
    connection.query(queryString, [colToSearch, tableInput], function(err, result) {
      if (err) throw err;
      console.log('\n');
      console.log(result);
    });
  },
  // insertOne: function(table, column) {
  //   var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (??, FALSE)";
  //   connection.query(queryString, [table, column], function(err, result) {
  //     if (err) throw err;
  //     console.log('\n');
  //     console.log(result);
  //   });
  // },
  // updateOne: function(table, column) {
  //   var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (??, FALSE)";
  //   connection.query(queryString, [table, column], function(err, result) {
  //     if (err) throw err;
  //     console.log('\n');
  //     console.log(result);
  //   });
  // },
};

module.exports = orm;