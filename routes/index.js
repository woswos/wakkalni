var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'index', menuId:'index'});
});

router.get('/store', function(req, res, next) {
  res.render('storeSubmit', {page:'store', menuId:'storeSubmit'});
});

module.exports = router;
