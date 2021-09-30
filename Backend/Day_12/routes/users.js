const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const query = req.query
  if(query.name){
    req.session.name = query.name
    res.send({
      status: "done"
    })
  }
  else{
    res.send({
      status: "need a name"
    })
  }
});

module.exports = router;
