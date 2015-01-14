'use strict';


var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/resume', function(req, res) {
	res.render('resume', { title: 'Reusme' });
});

module.exports = router;
