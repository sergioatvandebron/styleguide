import React from 'react';
import renderer from 'react-test-renderer';
import Textarea from '../';

describe('<Textarea/>', () => {
  it("renders error input", () => {
    const tree = renderer.create(
      <Textarea meta={{ touched: true, error: true }}>
        hello
      </Textarea>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders error input with error message", () => {
    const tree = renderer.create(
      <Textarea meta={{ touched: true, error: 'My error message' }}>
        hello
      </Textarea>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders success input", () => {
    const tree = renderer.create(
      <Textarea meta={{ touched: true }}>
        hello
      </Textarea>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific className", () => {
    const tree = renderer.create(
      <Textarea className="my-class"></Textarea>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific attributes", () => {
    const tree = renderer.create(
      <Textarea data-id="0"></Textarea>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
