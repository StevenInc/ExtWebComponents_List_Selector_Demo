const ExtWebpackPlugin = require('@sencha/ext-webpack-plugin');
const path = require('path');

module.exports = {
  devServer: {
    contentBase: 'build',
    hot: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: '8080',
    disableHostCheck: false,
    compress: false,
    inline: true,
    stats: 'none',
  },
  outputDir: path.join(__dirname, 'build'),
  configureWebpack: {
    plugins: [
        new ExtWebpackPlugin({
            framework: 'web-components',
            toolkit: 'modern',
            emit: 'yes',
            browser: 'no',
            packages: [],
            profile: '',
            verbose: 'no',
            treeshake:'no',
            environment: 'development'
        }),
    ]
  }
}