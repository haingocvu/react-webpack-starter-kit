import * as path from 'path';
import * as webpack from 'webpack';
import { merge } from 'webpack-merge';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { InjectManifest } from 'workbox-webpack-plugin';

import common from './webpack.common';

// for more detail,  prefer to below page
// https://webpack.js.org/guides/production/

const prodConfig: webpack.Configuration = merge(common, {
  entry: {
    polyfills: { import: './src/polyfills.ts', filename: '[name].bundle.js' },
    main: './src/index.tsx',
  },
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
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
    new InjectManifest({
      swSrc: './src-sw.js',
      swDest: 'sw.js',
      maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
      // Any other config if needed.
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
});

export default prodConfig;
