
/**
 * Module dependencies.
 */

var una = require('una');

var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = una.app;
var express = una.express;
var io = una.io;

// all environments
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

// var server = http.createServer(app);
// server.listen(app.get('port'), function(){
//   console.log('Una server listening on port ' + app.get('port'));
// });

una.listen(3882);
