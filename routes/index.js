var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'index', menuId:'index'});
});

router.get('/addItem', function(req, res, next) {
  res.render('addItem', {page:'Add Item', menuId:'addItem'});
});

router.get('/userList', function(req, res, next) {
  res.render('userList', {page:'User List', menuId:'userList'});
});

router.get('/storeList', function(req, res, next) {
  res.render('storeList', {page:'Store List', menuId:'storeList'});
});

router.get('/scanBarcode', function(req, res, next) {
  res.render('scanBarcode', {page:'Scan Barcode', menuId:'scanBarcode'});
});

router.post('/')

module.exports = router;
