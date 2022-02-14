var path = require('path') // Node.js의 path 라이브러리 가져오기
var webpack = require('webpack') // webpack 가져오기

module.exports = {
  mode: 'production', // none, development, production - https://joshua1988.github.io/webpack-guide/advanced/mode-config.html
  entry: './src/main.js', // 웹팩으로 변환할 대상 파일 경로
  output: { // 번들링, 변환, 빌드 후 나오는 대상 파일
    path: path.resolve(__dirname, './dist'), // __filename 은 현재 실행 중인 파일 경로 __dirname 은 현재 실행 중인 폴더 경로 출처: https://sukth09.tistory.com/30 [길라잡이비디오]
    publicPath: '/dist/', // CDN 배포 관련 검색
    filename: 'build.js'
  },
  module: { // loader 속성 정의
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: { // 웹팩으로 파일을 해석해나갈때 파일의 해석방식을 정의함
    alias: { // 별칭
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: { // 
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: { // 성능관련
    hints: false
  },
  devtool: '#eval-source-map' // 빌드된 파일과 실제 파일을 연결해줌
}

// if (process.env.NODE_ENV === 'production') {
//   module.exports.devtool = '#source-map'
//   // http://vue-loader.vuejs.org/en/workflow/production.html
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       sourceMap: true,
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.LoaderOptionsPlugin({
//       minimize: true
//     })
//   ])
// }