import React from 'react';
import renderer from 'react-test-renderer';
import Select from '../';

describe('<Select>', () => {
  it("renders Select", () => {
    const tree = renderer.create(
      <Select>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </Select>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific className", () => {
    const tree = renderer.create(
      <Select className="my-class">
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </Select>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific attributes", () => {
    const tree = renderer.create(
      <Select data-id="0">
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </Select>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
