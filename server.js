const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config = require("./webpack.config.js");

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
  hot: true,
});

server.listen(8080, "localhost", function () {
  console.log("Dev server listening on port 8080");
});
