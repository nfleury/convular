//load angularjs
require('angular');

//load module dependencies

require("angular-route/angular-route");



var app = angular.module('todo',['ngRoute']);

//templates
var views = {};

views['todo.list'] = require('/home/nicholas/tizako/sources/convular/examples/todo/views/todo.list.html');

views['todo.add'] = require('/home/nicholas/tizako/sources/convular/examples/todo/views/todo.add.html');

app.value('Views',views);

//controllers
var controllers = {};

controllers['todo'] = require('/home/nicholas/tizako/sources/convular/examples/todo/controllers/todo.js');

app.value('Controllers',controllers);



//Route configuration
app.config(function($routeProvider){
   console.log('App::registering routes');
  
    $routeProvider.when("/",{template:require("../../views/todo.list.html"),controller:controllers["todo"].list});
  
    $routeProvider.when("/add",{template:require("../../views/todo.add.html"),controller:controllers["todo"].add});
  
});


//register services

app.factory('commonService',require('/home/nicholas/tizako/sources/convular/examples/todo/services/common.js'));


//load entry point
require('../../entrypoint-dev.js')(app);
