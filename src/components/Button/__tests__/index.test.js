import React from 'react';
import renderer from 'react-test-renderer';
import Icon from '../../Icon';
import Button from '../';

describe("<Button>", () => {
  it("renders primary button type if does not pass a type", () => {
    const tree = renderer.create(
      <Button>My button</Button>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders primary button type", () => {
    const tree = renderer.create(
      <Button type="primary">My button</Button>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders info button type", () => {
    const tree = renderer.create(
      <Button type="info">My button</Button>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders warning button type", () => {
    const tree = renderer.create(
      <Button type="warning">My button</Button>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders danger button type", () => {
    const tree = renderer.create(
      <Button type="danger">My button</Button>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders success button type", () => {
    const tree = renderer.create(
      <Button type="success">My button</Button>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders small button size", () => {
    const tree = renderer.create(
      <Button size="small">My button</Button>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders compact button size", () => {
    const tree = renderer.create(
      <Button size="compact">My button</Button>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders large button size", () => {
    const tree = renderer.create(
      <Button size="large">My button</Button>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders tiny button size", () => {
    const tree = renderer.create(
      <Button size="tiny">My button</Button>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders full button", () => {
    const tree = renderer.create(
      <Button full>My button</Button>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders inverted button", () => {
    const tree = renderer.create(
      <Button inverted>My button</Button>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific className", () => {
    const tree = renderer.create(
      <Button className="my-class">My button</Button>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific className", () => {
    const tree = renderer.create(
      <Button data-id="0">My button</Button>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with button on the right", () => {
    const tree = renderer.create(
      <Button>
        My button
        <Icon source="facebook" />
      </Button>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with button on the left", () => {
    const tree = renderer.create(
      <Button>
        <Icon source="facebook" />
        My button
      </Button>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
