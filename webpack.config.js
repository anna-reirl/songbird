const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: './src/index.jsx',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/images',
          },
        },
        
      },
      {
        test: /\.(css|scss|sass)$/,
        exclude: /\.module\.(css|scss|sass)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'sass-loader',
        ],
      },
    ]
  },
  
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};