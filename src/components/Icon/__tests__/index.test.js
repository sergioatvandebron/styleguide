import React from 'react';
import renderer from 'react-test-renderer';
import Icon from '../';

const facebookIcon = '<svg xmlns="http://www.w3.org/2000/svg"><path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759H734V905H479V609h255V391q0-186 104-288.5T1115 0q147 0 228 12z"/></svg>';

describe("<Icon>", () => {
  it("renders correct markup", () => {
    const tree = renderer.create(
      <Icon source={facebookIcon} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders null if source is not a SVG", () => {
    const tree = renderer.create(
      <Icon source={'<img src="my-image-src" />'} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("adds spin animation selector", () => {
    const tree = renderer.create(
      <Icon source={facebookIcon} animation="spin" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("adds pulse animation selector", () => {
    const tree = renderer.create(
      <Icon source={facebookIcon} animation="pulse" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific className", () => {
    const tree = renderer.create(
      <Icon source={facebookIcon} className="my-class" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific attributes", () => {
    const tree = renderer.create(
      <Icon source={facebookIcon} data-id="0" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
