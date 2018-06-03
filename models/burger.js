var orm = require('../config/orm.js');

var burger = {
    selectAll: function(tableInput, cb) {
        orm.selectAll(tableInput, function(res){
            cb(res);
        });
    },
    insertOne: function(tableInput, burger_name, devoured, cb) {
        orm.insertOne(tableInput, burger_name, devoured, function(res){
            cb(res);
        });
    },
    updateOne: function(tableInput, objColVals, condition, cb) {
        orm.updateOne(tableInput, objColVals, condition, function(res){
            cb(res);
        });
    }
}

module.exports = burger;