var express = require("express");

var router = express.Router();

var burgers = require("../models/burger.js");

router.get("/", function (req, res) {
    burgers.all(function(data) {
        var burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});