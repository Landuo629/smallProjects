var http = require('http');
var url = require('url');
var http = require('http');
var url = require('url');
var util = require('util');
 
http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
 
    // 解析 url 参数
    var params = url.parse(req.url, true).query;
	console.log(params)
    res.end("网站名" + params.account);
 //    res.write("\n");
 //    res.write("网站 URL：" + params.password);
	// res.write("\n");
 //    res.write("网站 URL：" + params.password1);
    res.end();
 
}).listen(3000);