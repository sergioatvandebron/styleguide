import React from 'react';
import renderer from 'react-test-renderer';
import SkeletonBodyText from '../';

describe("<SkeletonCard>", () => {
  it("renders without params", () => {
    const tree = renderer.create(
      <SkeletonBodyText />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with 10 lines", () => {
    const tree = renderer.create(
      <SkeletonBodyText lines={10} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific className", () => {
    const tree = renderer.create(
      <SkeletonBodyText className="my-class" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific attributes", () => {
    const tree = renderer.create(
      <SkeletonBodyText data-id="0" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
