import { lazyLoad } from 'utils/loadable';

export const NotFoundPage = lazyLoad(
  () => import(/* webpackPrefetch: true */ './index'),
  module => module.NotFoundPage,
);
