import React from 'react';
import renderer from 'react-test-renderer';
import Input from '../';

describe('<Input/>', () => {
  it("renders error input", () => {
    const tree = renderer.create(
      <Input meta={{ touched: true, error: true }} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders error input with error message", () => {
    const tree = renderer.create(
      <Input meta={{ touched: true, error: 'My error message' }} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders success input", () => {
    const tree = renderer.create(
      <Input meta={{ touched: true }} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific className", () => {
    const tree = renderer.create(
      <Input className="my-class" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific attributes", () => {
    const tree = renderer.create(
      <Input data-id="0" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
