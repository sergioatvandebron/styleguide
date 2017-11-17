import React from 'react';
import renderer from 'react-test-renderer';
import Col from '../';

describe("<Col>", () => {
  it("renders Col with xs size 5", () => {
    const tree = renderer.create(
      <Col xs={5}>My Col</Col>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders Col with sm size 5", () => {
    const tree = renderer.create(
      <Col sm={5}>My Col</Col>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders Col with md size 5", () => {
    const tree = renderer.create(
      <Col md={5}>My Col</Col>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders Col with lg size 5", () => {
    const tree = renderer.create(
      <Col lg={5}>My Col</Col>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders Col with xs, sm, sm and lg size 3", () => {
    const tree = renderer.create(
      <Col xs={3} sm={3} md={3} lg={3}>My Col</Col>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders Col with offset-xs size 5", () => {
    const tree = renderer.create(
      <Col xsOffset={5} xs={5}>My Col</Col>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders Col with offset-sm size 5", () => {
    const tree = renderer.create(
      <Col smOffset={5} sm={5}>My Col</Col>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders Col with offset-md size 5", () => {
    const tree = renderer.create(
      <Col mdOffset={5} md={5}>My Col</Col>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders Col with offset-lg size 5", () => {
    const tree = renderer.create(
      <Col lgOffset={5} lg={5}>My Col</Col>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific className", () => {
    const tree = renderer.create(
      <Col xs={5} className="my-class">My Col</Col>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific attributes", () => {
    const tree = renderer.create(
      <Col xs={5} data-id="0">My Col</Col>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
