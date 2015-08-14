
var webpack = require('./../../../lib/convular').Webpack;//normal usecase should be: require('convular').Webpack;

module.exports = {
    debug:true,
    entry: "./generated/main.js",
    output: {
        filename: "entrypoint.js",
        //publicPath: '/js/'
    },
      resolve: {
        root: [require('path').join(__dirname,'..', "bower_components")]
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.html$/, loader: "html-loader" },
            { test: /\.jpe?g$|\.gif$|\.png$|\.svg($|\?)|\.woff($|\?)|\.ttf($|\?)|\.eot($|\?)|\.wav$|\.mp3$/, loader: "file-loader" }
        ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        "_": "lodash"
      }),
      new webpack.ResolverPlugin(new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"]))
    ]
};
