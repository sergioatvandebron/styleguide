import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../';

describe("<Card>", () => {
  it("renders default Card", () => {
    const tree = renderer.create(
      <Card>My card</Card>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders Card with a shadow", () => {
    const tree = renderer.create(
      <Card shadow>My card</Card>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific className", () => {
    const tree = renderer.create(
      <Card className="my-class">My card</Card>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific attributes", () => {
    const tree = renderer.create(
      <Card data-id="0">My card</Card>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
