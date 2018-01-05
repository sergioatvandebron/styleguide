import React from 'react';
import renderer from 'react-test-renderer';
import HeroImage from '../';

describe('<HeroImage>', () => {
  it("renders HeroImage without an image", () => {
    const tree = renderer.create(
      <HeroImage />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders  HeroImage with an image", () => {
    const tree = renderer.create(
      <HeroImage image="my-image-path" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific className", () => {
    const tree = renderer.create(
      <HeroImage className="my-class" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific attributes", () => {
    const tree = renderer.create(
      <HeroImage data-id="0" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
