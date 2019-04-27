var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'index', menuId:'index'});
});

router.post('/additem', function(req, res, next) {
  console.log(req.body)
  res.send('Username is ' + req.body.name + '<br>Password is ' + req.body.pwd);
});

module.exports = router;
