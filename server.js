var Webpack = require('webpack')
var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var config = require('./webpack.config')

config.entry.unshift(
  "webpack-dev-server/client?http://localhost:8080",
  'webpack/hot/dev-server'
)

config.plugins.push(
  new Webpack.HotModuleReplacementPlugin(),
  new Webpack.NoErrorsPlugin()
)

var compiler = webpack(config)

var server = new WebpackDevServer(compiler, {
  hot: true,
  watchDelay: 100,
  noInfo: true,
  stats: { colors: true },
  historyApiFallback: true
});

server.listen(8080, "localhost", function() {
  console.log("Server is listening on 8080")
});
