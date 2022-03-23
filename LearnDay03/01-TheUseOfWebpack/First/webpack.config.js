const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    // resolve用于拼接路径。并返回的是绝对路径
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
}