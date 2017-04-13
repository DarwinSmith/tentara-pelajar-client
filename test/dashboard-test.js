/**
 * Created by lightmitch on 4/13/17.
 */

import React from 'react';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const mainContent = renderer.create(
    <MainContent/>
  ).toJSON();
  expect(mainContent).toMatchSnapshot();
});
