import React from 'react';
import renderer from 'react-test-renderer';
import Item from '../Item';

describe("<Item>", () => {
  it("renders regular Item", () => {
    const tree = renderer.create(
      <Item>test</Item>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific className", () => {
    const tree = renderer.create(
      <Item className="my-class">test</Item>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific attributes", () => {
    const tree = renderer.create(
      <Item data-id="0">test</Item>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
