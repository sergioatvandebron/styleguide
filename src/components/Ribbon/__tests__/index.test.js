import React from 'react';
import renderer from 'react-test-renderer';
import Ribbon from '../';

describe("<Ribbon>", () => {
  it("renders default Ribbon", () => {
    const tree = renderer.create(
      <Ribbon>My Ribbon</Ribbon>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific className", () => {
    const tree = renderer.create(
      <Ribbon className="my-class">My Ribbon</Ribbon>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific attributes", () => {
    const tree = renderer.create(
      <Ribbon data-id="0">My Ribbon</Ribbon>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
