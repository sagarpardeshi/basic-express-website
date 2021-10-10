var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render(
    'index',
    {
      title: 'Home',
      message: 'Welcome to this simple, basic express website.'
    }
  );
});

module.exports = router;
