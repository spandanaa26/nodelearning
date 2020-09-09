var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let data =[{
    name:"spandana",
    age:30,
    salary:1000
  },
  {
  name:"beerukuri",
  age:21,
  salary:2000
  }]

  res.render('index', { title: 'Express' ,myname: "Spandana",
users:data
});
});

module.exports = router;
