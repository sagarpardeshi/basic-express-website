var express = require('express');
const common = require('../src/common');

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var quote = common.getQuote();
  res.render(
    'index',
    {
      title: 'Home',
      message: 'Welcome to this simple, basic express website.',
      quote: quote
    }
  );
});

module.exports = router;
