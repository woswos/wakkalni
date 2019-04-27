var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'index', menuId:'index'});
});

router.get('/storePostNewItem', function(req, res, next) {
  res.render('storePostNewItem', {page:'Post New Item', menuId:'storePostNewItem'});
});

router.get('/storeList', function(req, res, next) {
  res.render('storeList', {page:'Store List', menuId:'storeList'});
});

router.get('/shopperMap', function(req, res, next) {
  res.render('shopperMap', {page:'Shopper Map', menuId:'shopperMap'});
});

router.get('/scanBarcode', function(req, res, next) {
  res.render('scanBarcode', {page:'Scan Barcode', menuId:'scanBarcode'});
});

module.exports = router;
