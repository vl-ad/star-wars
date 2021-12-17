const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV;

module.exports = {
  mode,
  entry: path.join(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            // turn on css modules for namespacing
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[local]_[name]_[hash:base64:5]',
              },
            },
          },
        ],
      },
      // if we want to download an svg as an React component
      {
        test: /\.react.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jpg|gif|svg|jpeg)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@assets': path.resolve(__dirname, 'assets'),
      '@constants': path.resolve(__dirname, 'constants'),
      '@api': path.resolve(__dirname, 'api'),
      '@shapes': path.resolve(__dirname, 'shapes'),
      '@src': path.resolve(__dirname, 'src'),
      '@contexts': path.resolve(__dirname, 'contexts'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './assets/favicon.ico',
      template: path.join(__dirname, 'index.html'),
    }),
  ],
  // source maps only for dev
  devtool: mode === 'development' ? 'eval-source-map' : undefined,
};
