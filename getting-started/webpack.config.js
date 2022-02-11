// webpack.config.js
// `webpack` command will pick up this config setup by default
var path = require('path'); // node.js의 path 라이브러리를 가져옴, https://nodejs.org/api/path.html

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};