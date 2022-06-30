import * as path from 'path';
import * as webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import StylelintPlugin from 'stylelint-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { HtmlWebpackSkipAssetsPlugin } from 'html-webpack-skip-assets-plugin';
import InterpolateHtmlPlugin from 'interpolate-html-plugin';

const config: webpack.Configuration = {
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
        generator: {
          filename: 'assets/[hash][ext][query]',
        },
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
        {
          from: 'public',
          to: '',
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
    new InterpolateHtmlPlugin({
      PUBLIC_URL: '.',
    }),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.css'],
    modules: ['node_modules', path.join(__dirname, 'src')],
  },
};

export default config;
