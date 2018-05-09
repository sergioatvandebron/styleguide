import React from 'react';
import renderer from 'react-test-renderer';
import InputRadio from '../';

describe("<InputRadio>", () => {
  it("renders the correct markup", () => {
    const tree = renderer.create(
      <InputRadio />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific className", () => {
    const tree = renderer.create(
      <InputRadio className="my-class" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific attributes", () => {
    const tree = renderer.create(
      <InputRadio value="on" data-id="0" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
