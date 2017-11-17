import React from 'react';
import renderer from 'react-test-renderer';
import Container from '../';

describe("<Container>", () => {
  it("renders Container", () => {
    const tree = renderer.create(
      <Container>My Container</Container>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders fluid Container", () => {
    const tree = renderer.create(
      <Container fluid>My Container</Container>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific className", () => {
    const tree = renderer.create(
      <Container className="my-class">My Container</Container>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific attributes", () => {
    const tree = renderer.create(
      <Container data-id="0">My Container</Container>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
