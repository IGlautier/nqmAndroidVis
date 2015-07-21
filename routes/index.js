var express = require('express');
var router = express.Router();
var fs = require('fs');
var accel = {"values":[]};
var light = {"values":[]};
var temp = {"values":[]};


router.post('/', function(req, res, next) {
	/*res.send(200);*/
	/*parse(req.body, function(parsed) {
		console.log(parsed);
		});*/
	//console.log(req.body);
	res.sendStatus(200);
	var rc = req.body;
	//var arr = req.body.split('\'');
	//console.log(arr);
	//console.log("hello");
	console.log(rc);
	if (rc.type == 'accelerometer') {
		var newData = {};
		newData.time = Date.now();
		newData.x = rc['0.0'];
		newData.y = rc['1.0'];
		newData.z = rc['2.0'];
		accel.values.push(newData);
	}
	if (rc.type == 'light') {
		var newData = {};
		newData.time = Date.now();
		newData.x = rc['0.0'];
		newData.y = rc['1.0'];
		newData.z = rc['2.0'];
		light.values.push(newData);
	}
	if (rc.type == 'temperature') {
		var newData = {};
		newData.time = Date.now();
		newData.x = rc['0.0'];
		newData.y = rc['1.0'];
		newData.z = rc['2.0'];
		temp.values.push(newData);
	}
//	var arr = bod.split("'");

});

/* GET home page. */
router.get('/visualise', function(req, res, next) {
 res.render('index', { title: 'Express' });
 

});

router.get('/light', function(req, res, next) {
 res.render('light', { title: 'Express' });
 

});

router.get('/temperature', function(req, res, next) {
 res.render('temp', { title: 'Express' });
 

});

router.get('/data', function(req, res, next) {
	res.send(JSON.stringify(accel));
});

router.get('/data/light', function(req, res, next) {
	res.send(JSON.stringify(light));
});


router.get('/data/temp', function(req, res, next) {
	res.send(JSON.stringify(temp));
});

module.exports = router;
