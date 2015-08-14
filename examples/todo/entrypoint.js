module.exports = function(app){

  window.db = {
    tasks : []
  };

  app.config(function($routeProvider){
    console.log('App:: Entry point config...');
    $routeProvider.otherwise("/");
  });

};
