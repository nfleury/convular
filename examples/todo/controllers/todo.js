module.exports = {

    list: function($scope,commonService,Controllers){

      $scope.tasks = window.db.tasks;

      $scope.remove = function(index){
        $scope.tasks.splice(index,1);
      };

    },

    add: function($scope){

      $scope.add = function(){
        window.db.tasks.push($scope.task);
        window.location.href="#/list";
      };

    },



  };
