var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/jetbrains');

var Product = mongoose.model('Product', {name: String});

app.get('/', function(req, res) {
    Product.find(function(err, products) {
        res.send(products);
    })
});

app.post("/add", function(req,res) {
    var name = req.body.name;
    var product = new Product({name: name});

    product.save(function(err) {
        res.send();
    });
})

app.listen(3000);