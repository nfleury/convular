module.exports = function(app){

  require('./entrypoint')(app);

  app.config(function($routeProvider){
    console.log('AppDEV:: Entry point config');

  });




};
