// Generated using webpack-cli https://github.com/webpack/webpack-cli
// import commonjsVariables from 'commonjs-variables-for-esmodules';
const { resolve } = require('path');

const isProduction = process.env.NODE_ENV === 'production';
// const { __dirname, __filename } = commonjsVariables(import.meta);

const config = {
  target: 'node',
  entry: './src/app.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/i,
        loader: 'babel-loader'
      }
      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ]
  }
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
};
