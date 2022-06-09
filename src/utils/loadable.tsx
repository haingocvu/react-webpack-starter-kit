import React, { lazy, Suspense } from 'react';

interface Opts {
  fallback: React.ReactNode;
}
type Unpromisify<T> = T extends Promise<infer P> ? P : never;

export const lazyLoad = <
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends Promise<any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  U extends React.ComponentType<any>,
>(
  importFunc: () => T,
  selectorFunc?: (s: Unpromisify<T>) => U,
  opts: Opts = { fallback: null },
) => {
  let lazyFactory: () => Promise<{ default: U }> = importFunc;

  if (selectorFunc) {
    lazyFactory = () =>
      importFunc().then(module => ({ default: selectorFunc(module) }));
  }

  const LazyComponent = lazy(lazyFactory);

  const LazyComponentReturn = (props: React.ComponentProps<U>): JSX.Element => (
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    <Suspense fallback={opts.fallback!}>
      <LazyComponent {...props} />
    </Suspense>
  );

  return LazyComponentReturn;
};
