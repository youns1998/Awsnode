var express = require('express');
var app = express();
var AWS = require('aws-sdk');
AWS.config.region = "ap-northeast-2";
var ec2 = new AWS.EC2();
ec2.describeInstances({}, function(err, data){
	console.log(data);
	console.log(err);
});
app.get('/', function(req, res){
        res.send('Hello world');
});
//app.listen(90, function(){
//        console.log('Connect 90 port');
//});
