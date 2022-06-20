import * as path from 'path';
import * as webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import StylelintPlugin from 'stylelint-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { HtmlWebpackSkipAssetsPlugin } from 'html-webpack-skip-assets-plugin';

const config: webpack.Configuration = {
  entry: {
    polyfills: './src/polyfills.ts',
    main: './src/index.tsx',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
      },
    ],
  },
  // for more detail, see below
  // https://github.com/jantimon/html-webpack-plugin/blob/main/docs/template-option.md
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
      template: 'public/index.html',
      skipAssets: [
        'polyfills.**.js',
        asset => asset.attributes && asset.attributes['x-skip'],
      ],
    }),
    new HtmlWebpackSkipAssetsPlugin(),
    new ESLintPlugin(),
    new StylelintPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'public/robots.txt', to: '' },
        { from: 'public/manifest.json', to: '' },
        { from: 'public/logo192.png', to: '' },
        { from: 'public/logo512.png', to: '' },
        { from: 'public/favicon.ico', to: '' },
        { from: 'public/maskable_icon.png', to: '' },
      ],
    }),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.css'],
    modules: ['node_modules', path.join(__dirname, 'src')],
  },
};

export default config;
