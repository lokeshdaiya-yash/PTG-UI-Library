const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, { mode }) => {
  const isDevelopment = mode !== 'production';
  const orgName = "app";
  /** @type {import('webpack').Configuration} */
  const config = {
    entry: path.join(__dirname, 'src/main.js'),
    output: {
      clean: true,
      publicPath: '/',
      filename: isDevelopment ? '[name].js' : '[name].[contenthash].js',
      path: path.join(__dirname, '../../dist/apps/root-config'),
    },
    target: 'web',
    mode: isDevelopment ? 'development' : 'production',
    plugins: [
      new HtmlWebpackPlugin({
        isDevelopment,
        minify: !isDevelopment,
        template: path.join(__dirname, 'src/index.ejs'),
        templateParameters: {
          isLocal: env && env.isLocal,
          orgName,
        }
      }),
    ],
    devServer: {
      port: 8080,
      hot: false,
      liveReload: true,
      historyApiFallback: true,
    },
  };

  return config;
};





