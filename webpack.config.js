const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// https://webpack.js.org/guides/getting-started/#using-a-configuration
module.exports = {
  // mode: "development", // Удалим mode (теперь задаем в скрптах package.json)
  // entry: path.resolve(__dirname, 'src', 'index.js'),
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),
    new MiniCssExtractPlugin()
  ],
  devServer: {
    static: path.resolve(__dirname, 'build'), // путь к сборке
    port: 8080, // порт, на котором будет запускаться локальный сервер
    open: true, // флаг, будет ли открываться странице при сборке
  },
  module: {
    rules: [
      // Поддержка кода другими браузерами
      {
        test: /.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // Поддержка стилей
      {
        test: /.css$/i,
        // use: ['style-loader', 'css-loader'],
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      // Поддержка картинок
      {
        test: /.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), '...'],
  },
}