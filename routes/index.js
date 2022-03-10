var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/count/:from-:to', (req, res) => {
  let from = parseInt(req.params.from);
  let to = parseInt(req.params.to);

  if (!isNaN(from) && !isNaN(to)) {
    if (to < from) {
      let tmp = to;
      to = from;
      from = tmp;
    }
    let out = '<ul>';

    for (let i = from; i <= to; i++) {
      out += `<li>${i}</li>`;
    }
    out += '</ul>';
    res.send(out);
  } else {
    res.send('bad parameters');
  }

});

router.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params.bookId + "<br>" + req.params.userId)
});

router.get('/colours/:from-:to', function (req, res) {
});


router.get('/', function (req, res, next) {
  res.render('index', { title: 'Hola Mundo!' });
});

router.get('/chepe', function (req, res, next) {
  res.render('index', { title: 'Chepe!' });
});

module.exports = router;
