var express = require('express');
var router = express.Router();

/* GET celebrities page. */
router.get('/', function(req, res, next) {
    res.send('celebrities!!!');
  });

module.exports = router;