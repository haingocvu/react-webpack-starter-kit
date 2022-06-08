import * as path from 'path';
import * as webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';

const config: webpack.Configuration = {
  entry: {
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
    }),
    new ESLintPlugin(),
  ],
  resolve: { extensions: ['*', '.js', '.jsx', '.ts', '.tsx'] },
};

export default config;
