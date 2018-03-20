import React from 'react';
import renderer from 'react-test-renderer';
import Spinner from '../';

describe('<Spinner />', () => {
  it('renders a spinner', () => {
    expect(renderer.create(
      <Spinner />
    ).toJSON()).toMatchSnapshot();
  });

  it('renders a spinner with children', () => {
    expect(renderer.create(
      <Spinner>
        <strong>i am a child</strong>
      </Spinner>
    ).toJSON()).toMatchSnapshot();
  });

  it('renders a full screen spinner', () => {
    expect(renderer.create(
      <Spinner fullScreen />
    ).toJSON()).toMatchSnapshot();
  });
});
