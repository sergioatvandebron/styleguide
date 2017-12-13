import React from 'react';
import renderer from 'react-test-renderer';
import SkeletonDisplayText from '../';

describe("<SkeletonCard>", () => {
  it("renders without params", () => {
    const tree = renderer.create(
      <SkeletonDisplayText />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders small size", () => {
    const tree = renderer.create(
      <SkeletonDisplayText size="small" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders medium size", () => {
    const tree = renderer.create(
      <SkeletonDisplayText size="medium" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders large size", () => {
    const tree = renderer.create(
      <SkeletonDisplayText size="large" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders extraLarge size", () => {
    const tree = renderer.create(
      <SkeletonDisplayText size="extraLarge" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders full width", () => {
    const tree = renderer.create(
      <SkeletonDisplayText full />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders small size and full width", () => {
    const tree = renderer.create(
      <SkeletonDisplayText size="small" full />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific className", () => {
    const tree = renderer.create(
      <SkeletonDisplayText className="my-class" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific attributes", () => {
    const tree = renderer.create(
      <SkeletonDisplayText data-id="0" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
