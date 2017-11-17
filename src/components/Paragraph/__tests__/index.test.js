import React from 'react';
import renderer from 'react-test-renderer';
import Paragraph from '../';

describe("<Paragraph>", () => {
  it("renders Paragraph", () => {
    const tree = renderer.create(
      <Paragraph>My Paragraph</Paragraph>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific className", () => {
    const tree = renderer.create(
      <Paragraph className="my-class">My Paragraph</Paragraph>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific attributes", () => {
    const tree = renderer.create(
      <Paragraph data-id="0">My Paragraph</Paragraph>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
