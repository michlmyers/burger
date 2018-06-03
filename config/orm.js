var connection = require('../config/connection.js');


function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob.key)) {
            if (typeof value === 'string' && value.indexOf('') >= 0) {
                value = "'" + value + "'";
            }
        }
        arr.push(key + '=' + value);
    }

    return arr.toString();
}

var orm = {

    selectAll: function (tableInput, cb) {
        var queryString = 'SELECT * FROM' + tableInput + ';';
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // changed function parameters to from table, burger_name, devoured, cb
    insertOne: function (table, cols, vals, cb) {
        var queryString = 'INSERT INTO' + table + ' (burger_name, devoured)';
        queryString += 'VALUES ("' + burger_name + '", ' + devoured + ');';

        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function (table, objColVals, condition, cb) {
        var queryString = 'UPDATE' + table;

        queryString += ' SET ';
        queryString += objToSql(objColVals);
        queryString += ' WHERE ';
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;