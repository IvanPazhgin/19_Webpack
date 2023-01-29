const path = require('path')

// https://webpack.js.org/guides/getting-started/#using-a-configuration
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true
  }
}