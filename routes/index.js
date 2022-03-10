var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Hola Mundo!' });
});

router.get('/chepe', function (req, res, next) {
  res.render('index', { title: 'Chepe!' });
});

module.exports = router;
