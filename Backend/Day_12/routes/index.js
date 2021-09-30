var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  if (req.session.name)
    res.send({
      name: req.session.name
    })
  else
    res.send({
      name: null
    })
});

module.exports = router;
