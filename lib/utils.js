var _  = require('lodash');
var Glob = require('glob');
var Path = require('path');

module.exports = {

    parseConfig: function(config,options){

      config.modules = config.modules ? config.modules : [];
      config.routes = config.routes ? config.routes : [];

      var result = _.clone(config);

      var modules = [];
      var routes = [];

      //Modules
      var modulesKeys = Object.keys(config.modules);

      result.dependencies = modulesKeys;

      for (var i = 0; i < modulesKeys.length; i++) {

        var key = modulesKeys[i];

        modules.push({name:key,lib:config.modules[key]});

      }

      result.modules = modules;

      //Routes
      var routesKeys = Object.keys(config.routes);

      for (var j = 0; j < routesKeys.length; j++) {

        var path = routesKeys[j];
        var view = config.routes[path].view ? config.routes[path].view :  config.routes[path].controller + "." + config.routes[path].action +".html";
        
        routes.push({
          path:path,
          controller:config.routes[path].controller,
          action:config.routes[path].action,
          view:view,
        });
      }

      result.routes = routes;

      //helper methods
      result.getFiles = function(folder){

        var files = Glob.sync(Path.join(options.basedir,folder,'/**/*.*'));
        var result = [];

        for (var i = files.length - 1; i >= 0; i--) {

          var file = files[i];
          var fileName = Path.basename(file,Path.extname(file));


          result.push({file:file,name:fileName});

        }

        return result;

      };

      return result;
    }

  };
