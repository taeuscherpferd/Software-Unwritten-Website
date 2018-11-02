var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res ) {
  res.sendFile('index.html', {root: 'public'});
});

router.get('/comics', function(req, res ) {
  res.sendFile('comics.html', {root: 'public'});
});

module.exports = router;
