const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const nodeExternals = require('webpack-node-externals');
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "index-bundle.js",
    publicPath: '/'
  },
  // target: 'web',
  // externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader",
           options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[local]___[hash:base64:5]"
        }
        } 
        
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      // filename: "./index.html"
    })
  ]
};