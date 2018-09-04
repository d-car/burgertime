// Import MySQL connection.
var connection = require("../config/connection.js");

//helper function to convert objects to SQL syntax
function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >=0) {
                value = "'" + value + "'";
            }
        }
        arr.push(key + "=" + value);
    }
    //return arr array into one string seperated by commas
    return arr.toString();
}

//begin orm functions
var orm = {
    //orm all method, will run this query for root
    all: function(tableInput, cb)  {
        var queryString = "SELECT * FROM" + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    //orm create method. Run this query when adding new burger to db. break it up by line to make it easier to read
    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

    //log query to help visualize
    console.log(querystring);

    connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
    });

    }


    
}

// Export the orm object for the model (cat.js).
module.exports = orm;