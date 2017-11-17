import React from 'react';
import renderer from 'react-test-renderer';
import Link from '../';

describe("<Link>", () => {
  it("renders primary Link", () => {
    const tree = renderer.create(
      <Link>My Link</Link>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders secondary Link component", () => {
    const tree = renderer.create(
      <Link type="secondary">My Link</Link>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific className", () => {
    const tree = renderer.create(
      <Link className="my-class">My Link</Link>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific attributes", () => {
    const tree = renderer.create(
      <Link href="#" title="My link" data-id="0">My Link</Link>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
