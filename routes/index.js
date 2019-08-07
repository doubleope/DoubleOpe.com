var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/cgg', function(req, res, next) {
  res.render('cgg');
});
router.get('/cgg/about', function(req, res, next) {
  res.render('about');
});


module.exports = router;
