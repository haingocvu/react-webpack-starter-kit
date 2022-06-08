import * as webpack from 'webpack';
import { merge } from 'webpack-merge';
// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server';

import common from './webpack.common';

const devConfig: webpack.Configuration = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    port: 3000,
  },
});

export default devConfig;
