var connection = require('../config/connection.js');

function objToSql(ob){
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob.key)) {
            if (typeof value === 'string' && value.indexOf('') >= 0){
                value = "'" + value + "'";
            }
        }
        arr.push(key + '=' + ob[key]);
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
    insertOne: function (tableInput, burger_name, devoured, cb) {
        var queryString = 'INSERT INTO' + tableInput + ' (burger_name, devoured';
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