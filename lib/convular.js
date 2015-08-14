var Path = require('path');
var Swig = require('swig');
var Fs = require('fs');
var Webpack = require('webpack');
var Express = require('express');
var Livereload = require('express-livereload');
var Glob = require('glob');

var Utils = require('./utils');

var Convular = function(options){
this.options = options;
};



Convular.prototype.run = function(){

  var www_dir         = Path.join(this.options.basedir,'www');
  var htmlindex_file  = Path.join(www_dir,'index.html');
  var convular_conf   = Path.join(this.options.basedir,'convular.js');
  var convular_dir    = Path.join(this.options.basedir,'.convular');
  var generation_dir  = Path.join(convular_dir,'generated');
  var template_dir    = Path.join(convular_dir,'templates');
  var template_file   = Path.join(template_dir,'default.tmpl');
  var webpack_file    = Path.join(convular_dir,'webpack.config.js');
  var webpack_config  = require(webpack_file);
  var config          = require(convular_conf);

  var generated_entryfile       = Path.join(generation_dir,'main.js');
  var generated_htmlindex_file  = Path.join(generation_dir,'index.html');

  config      = Utils.parseConfig(config,this.options);

  //set webpack context = base directory
  webpack_config.context = convular_dir;
  webpack_config.output = {
    filename: 'entrypoint.js',
    path:generation_dir
  };
  webpack_config.watch = true;

  var options = this.options;

  config.entrypoint = this.options.entrypoint;
  config.env        = this.options.env;
  config.config     = JSON.stringify(config);


  var entryoutput   = Swig.renderFile(template_file,config);
  var htmlindex_output = Swig.renderFile(htmlindex_file,config);

  Fs.writeFileSync(generated_entryfile,entryoutput);

  //@TODO: check if file exists first
  Fs.writeFileSync(generated_htmlindex_file,htmlindex_output);


  Webpack(webpack_config, function( err, stats ) {

    console.log(stats.toString({
      colors: true,
      modules: true,
      chunkModules: true
    }));
  });




  var Server = Express();
  Livereload(Server, {
    watchDir :this.options.basedir
  });

  Server.use(Express.static(generation_dir));


  Server.listen(3001);

};


Convular.Webpack = Webpack;
module.exports = Convular;
