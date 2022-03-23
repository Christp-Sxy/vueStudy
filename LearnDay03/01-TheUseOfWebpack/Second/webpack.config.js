const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    // resolve用于拼接路径。并返回的是绝对路径
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // 每次加上这个就会在每个url前加上这个路径
    publicPath: 'dist/'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader只负责将css文件进行加载，不负责将整个文件进行解析
        // style-loader负责将央视添加到DOM中
        // 使用多个loader时是从右向左进行读的
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片小于limit时，会将图片编译成base64字符串的形式
              // 当加载的图片大于limit时，需要使用file-loader进行加载
              limit: 8192,
              name: 'img/[name].[hash:8].[ext]', // 避免文件名重复
              esModule: false
            }
          }
        ],
        type: 'javascript/auto',
      }
    ]
  }
}