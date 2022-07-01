import { lazyLoad } from 'utils/loadable';

export const SandboxPage = lazyLoad(
  () => import('./index'),
  module => module.Sandbox,
);
