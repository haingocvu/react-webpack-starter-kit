import * as webpack from 'webpack';
const { merge } = require('webpack-merge');

import common from './webpack.common';

// for more detail,  prefer to below page
// https://webpack.js.org/guides/production/

const prodConfig: webpack.Configuration = merge(common, {
  mode: 'production',
  devtool: 'source-map',
});

export default prodConfig;
