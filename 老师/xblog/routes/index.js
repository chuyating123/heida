var express = require('express');
var router = express.Router();
var User=require("../controllers/user.js")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/index',User.index)
router.get('/testmysql',User.testmysql);
module.exports = router;
