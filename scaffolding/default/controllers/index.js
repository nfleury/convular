module.exports = {

  index: function($scope,Services){

    $scope.sayHi = function(){
      return Services.hello.sayHi($scope.name);
    };

  }





};
