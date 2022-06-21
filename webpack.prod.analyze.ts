import * as webpack from 'webpack';
import { merge } from 'webpack-merge';
import BundleAnalyzerPlugin from 'webpack-bundle-analyzer';

import prod from './webpack.prod';

const prodConfig: webpack.Configuration = merge(prod, {
  plugins: [new BundleAnalyzerPlugin.BundleAnalyzerPlugin()],
});

export default prodConfig;
