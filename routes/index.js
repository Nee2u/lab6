var express = require('express');
var router = express.Router();
var Rpsu=require('../models/rpsumodel');

var Next=require('../models/nextmodel');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});



router.post('/', function(req, res, next) {

var nname = req.body.nname;
var id = req.body.id;
var batch = req.body.batch;
var dept = req.body.dept;

console.log(nname + " " + id + " " +dept + " " + batch);
var query={id:id};

	Rpsu.findOneAndUpdate(query, {
    $set: {
      nname:nname,
      id:id,
      batch:batch,
      dept:dept
    }
  }, {
    new: true,
    upsert: true
  }, function(err, doc) {
    if (err) {
console.log("Entered to the Next page");
}

});
res.redirect('/nextpage');
});


router.get('/nextpage', function(req, res, next) {
  res.render('next');
});



router.post('/nextpage', function(req, res, next) {

var email = req.body.email;
var pw = req.body.pw;
var nmb= req.body.nmb;
var gndr = req.body.gndr;

console.log(email + " " + pw + " " + nmb + " " + gndr);
var query={};

	Next.findOneAndUpdate(query, {
    $set: {
      email:email,
      pw:pw,
      nmb:nmb,
      gndr:gndr
    }
  }, {
    new: true,
    upsert: true
  }, function(err, doc) {
    if (err) {
console.log("Finished  Sucessfully ");
}

});
res.redirect('/nextpage');
});



module.exports = router;
