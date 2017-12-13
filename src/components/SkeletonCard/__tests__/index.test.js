import React from 'react';
import renderer from 'react-test-renderer';
import SkeletonDisplayText from '../../SkeletonDisplayText';
import SkeletonCard from '../';

describe("<SkeletonCard>", () => {
  it("renders with a string as children", () => {
    const tree = renderer.create(
      <SkeletonCard>My card</SkeletonCard>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with a component as children", () => {
    const tree = renderer.create(
      <SkeletonCard>
        <SkeletonDisplayText />
      </SkeletonCard>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific className", () => {
    const tree = renderer.create(
      <SkeletonCard className="my-class">My Col</SkeletonCard>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific attributes", () => {
    const tree = renderer.create(
      <SkeletonCard data-id="0">My Col</SkeletonCard>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
