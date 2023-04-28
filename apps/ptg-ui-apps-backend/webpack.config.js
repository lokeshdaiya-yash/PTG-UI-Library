const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = (config, context) => {
 console.log({config})
  return {
    ...config,
    plugins: [
      ...config.plugins,
              new HtmlWebpackPlugin({
          template: 'apps/ptg-ui-apps-backend/src/index.html'
        })
    ]
  };
};
