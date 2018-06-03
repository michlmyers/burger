var orm = require('../config/orm.js');

var burger = {
    // selectAll: function(tableInput, cb) {
    //     orm.selectAll('burgers', tableInput, function(res){
    //         cb(res);
    //     });
    // },
    selectAll: function(cb){
        orm.selectAll('burgers', function(res){
            cb(res);
        });
    },
    // insertOne: function(tableInput, burger_name, devoured, cb) {
    //     orm.insertOne('burgers', tableInput, burger_name, devoured, function(res){
    //         cb(res);
    //     });
    // },
    insertOne: function(cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, function(res) {
            cb(res);
        });
    },
    // updateOne: function(tableInput, objColVals, condition, cb) {
    //     orm.updateOne('burgers', tableInput, objColVals, condition, function(res){
    //         cb(res);
    //     });
    // }
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;