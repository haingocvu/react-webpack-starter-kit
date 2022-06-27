import * as path from 'path';
import * as webpack from 'webpack';
import { merge } from 'webpack-merge';
// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import common from './webpack.common';

const devConfig: webpack.Configuration = merge(common, {
  entry: {
    polyfills: './src/polyfills.ts',
    main: './src/index.tsx',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true,
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
        test: /\.(sa|sc|c)ss$/,
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
          'sass-loader',
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
