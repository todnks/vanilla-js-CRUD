const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      '@style': path.resolve(__dirname, 'src/style/'),
      '@core': path.resolve(__dirname, 'src/core/'),
      '@router': path.resolve(__dirname, 'src/router/'),
      '@views': path.resolve(__dirname, 'src/views/'),
      '@service': path.resolve(__dirname, 'src/service/'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'CRUD',
      template: './public/index.html',
    }),
  ],
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
