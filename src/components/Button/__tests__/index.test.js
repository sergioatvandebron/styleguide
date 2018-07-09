import React from 'react';
import renderer from 'react-test-renderer';
import Icon from '../../Icon';
import Button from '../';

const facebookIcon = '<svg xmlns="http://www.w3.org/2000/svg"><path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759H734V905H479V609h255V391q0-186 104-288.5T1115 0q147 0 228 12z"/></svg>';

describe("<Button>", () => {
  it("renders primary button if does not pass a theme", () => {
    const tree = renderer.create(
      <Button>My button</Button>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders primary button", () => {
    const tree = renderer.create(
      <Button theme="primary">My button</Button>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders info button", () => {
    const tree = renderer.create(
      <Button theme="info">My button</Button>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders warning button", () => {
    const tree = renderer.create(
      <Button theme="warning">My button</Button>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders danger button", () => {
    const tree = renderer.create(
      <Button theme="danger">My button</Button>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders success button", () => {
    const tree = renderer.create(
      <Button theme="success">My button</Button>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders facebook button", () => {
    const tree = renderer.create(
      <Button theme="facebook">My button</Button>
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

  it("renders big button size", () => {
    const tree = renderer.create(
      <Button size="big">My button</Button>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders disabled button", () => {
    const tree = renderer.create(
      <Button disabled>My button</Button>
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
        <Icon source={facebookIcon} />
      </Button>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with button on the left", () => {
    const tree = renderer.create(
      <Button>
        <Icon source={facebookIcon} />
        My button
      </Button>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders grayscale button", () => {
    const tree = renderer.create(
      <Button grayscale>My button</Button>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders square button", () => {
    const tree = renderer.create(
      <Button shape="square">My button</Button>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders square button with an Icon", () => {
    const tree = renderer.create(
      <Button shape="square">
        <Icon source={facebookIcon} />
        My button
      </Button>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders small square button with an Icon", () => {
    const tree = renderer.create(
      <Button shape="square">
        <Icon source={facebookIcon} />
      </Button>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders circle button", () => {
    const tree = renderer.create(
      <Button shape="circle">
        <Icon source={facebookIcon} />
      </Button>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders a link", () => {
    const tree = renderer.create(
      <Button link href="https://vandebron.nl">Button link</Button>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders the button as a span", () => {
    const tree = renderer.create(
      <Button plain>My span button</Button>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
