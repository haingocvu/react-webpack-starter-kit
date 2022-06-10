import * as webpack from 'webpack';
import { merge } from 'webpack-merge';
// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import common from './webpack.common';

const devConfig: webpack.Configuration = merge(common, {
  output: {
    publicPath: '/',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    port: 3000,
    historyApiFallback: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
});

export default devConfig;
