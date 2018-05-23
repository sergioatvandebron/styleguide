import React from 'react';
import renderer from 'react-test-renderer';
import InputCheckbox from '../';

describe("<InputCheckbox>", () => {
  it("renders the correct markup", () => {
    const tree = renderer.create(
      <InputCheckbox />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific className", () => {
    const tree = renderer.create(
      <InputCheckbox className="my-class" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific attributes", () => {
    const tree = renderer.create(
      <InputCheckbox value="on" data-id="0" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
