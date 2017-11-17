import React from 'react';
import renderer from 'react-test-renderer';
import Heading from '../';

describe("<Heading>", () => {
  it("renders h1 Heading if does not pass a size", () => {
    const tree = renderer.create(
      <Heading>My Heading</Heading>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders h1 Heading size", () => {
    const tree = renderer.create(
      <Heading size="h1">My Heading</Heading>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders h2 Heading size", () => {
    const tree = renderer.create(
      <Heading size="h2">My Heading</Heading>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders h3 Heading size", () => {
    const tree = renderer.create(
      <Heading size="h3">My Heading</Heading>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders h4 Heading size", () => {
    const tree = renderer.create(
      <Heading size="h4">My Heading</Heading>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific className", () => {
    const tree = renderer.create(
      <Heading className="my-class">My Heading</Heading>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
