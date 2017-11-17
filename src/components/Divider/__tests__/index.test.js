import React from 'react';
import renderer from 'react-test-renderer';
import Divider from '../';

describe('<Divider>', () => {
  it("renders Divider", () => {
    const tree = renderer.create(
      <Divider />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders Divider with content", () => {
    const tree = renderer.create(
      <Divider>Hi</Divider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific className", () => {
    const tree = renderer.create(
      <Divider className="my-class" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific attributes", () => {
    const tree = renderer.create(
      <Divider data-id="0" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
