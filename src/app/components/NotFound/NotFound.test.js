import React from 'react';
import renderer from 'react-test-renderer';

import NotFound from './index.tsx';
it('test render component', () => {
  const component = renderer.create(<NotFound />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
