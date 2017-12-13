import React from 'react';
import renderer from 'react-test-renderer';
import NumberInput from '../';

describe('<NumberInput/>', () => {
  it("renders the correct markup", () => {
    const tree = renderer.create(
      <NumberInput />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific className", () => {
    const tree = renderer.create(
      <NumberInput className="my-class" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific attributes", () => {
    const tree = renderer.create(
      <NumberInput data-id="0" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
