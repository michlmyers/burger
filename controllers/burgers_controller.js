var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

var bodyParser = require('body-parser');

router.get('/', function(req,res) {
    res.redirect('/burgers');
});

router.get('/burgers', function(req, res) {
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/burgers/create', function(req, res) {
    burger.insertOne(req.body.burger_name, req.body.devoured, function(data) {
        res.redirect('/');
    });
});

router.put('/burgers/update/:id', function(req, res){
    var condition = 'id = ' + req.params.id;

    console.log('condition', condition);

    burger.updateOne({'devoured' : req.body.devoured}, condition, function(data) {
        res.redirect('/');
    });
});

module.exports = router;