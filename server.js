var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = require('./webpack.config.js');

var app = express();
var compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '/public'));

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  historyApiFallback: true
}));

app.use(webpackHotMiddleware(compiler));

var port = 3000;
var server = app.listen(port, function(error) {
  if (error) throw error;
  console.log('Example app listening at port ' + port);
});
