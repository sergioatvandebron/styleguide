import React from 'react';
import renderer from 'react-test-renderer';
import Sticker from '../';

describe("<Sticker>", () => {
  it("renders default Sticker", () => {
    const tree = renderer.create(
      <Sticker>My sticker</Sticker>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders splash Sticker", () => {
    const tree = renderer.create(
      <Sticker type="splash">My sticker</Sticker>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific className", () => {
    const tree = renderer.create(
      <Sticker className="my-class">My sticker</Sticker>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific attributes", () => {
    const tree = renderer.create(
      <Sticker data-id="0">My sticker</Sticker>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
