var express = require('express');
const common = require('../src/common');

var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  var quote = common.getQuote();
  res.render(
    'about',
    {
      title: 'About',
      message: 'Welcome to our about page.',
      quote: quote
    }
  );
});

module.exports = router;
