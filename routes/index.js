var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Home');
});

router.get('/About', function(req, res, next) {
  res.render('About');
});


router.get('/Contect', function(req, res, next) {
  res.render('Contect');
});


router.get('/Login', function(req, res, next) {
  res.render('Login');
});

router.post('/Login', function(req, res, next) {
  res.send()
});


router.get('/Register', function(req, res, next) {
  res.render('Register');
});

module.exports = router;
