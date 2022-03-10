var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a jif resource');
});

// takes this one first before below (user2)
router.get('/:name', function (req, res, next) {
  res.render('users', { 'name': req.params.name });
});

// takes first url above which is http://localhost:8080/users and you can add what's in after / to go into page
// to use below url must be: http://localhost:8080/users/users2  
router.get('/users2', function (req, res, next) {
  res.send('respond with users2');
});

module.exports = router;
