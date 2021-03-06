/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('ipaddr', process.env.IP || "0.0.0.0");
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'mobile')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Home
app.get('/', routes.index);

// Mobile (For Firefox OS app market)
app.get('/mobile', routes.mobile);

// Engage
http.createServer(app).listen(app.get('port'), app.get('ipaddr'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});