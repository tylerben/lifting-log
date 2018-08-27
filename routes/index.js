var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lifting Log' });
});

router.get('/activities/view', function(req, res, next) {
  res.render('activities/view', { title: 'All Activities' });
});

router.get('/activities/new', function(req, res, next) {
  res.render('activities/new', { title: 'Add New Session' });
});

module.exports = router;
