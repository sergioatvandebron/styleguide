import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Popover from '../';

const renderer = new ShallowRenderer();

describe("<Popover>", () => {
  it("renders Popover", () => {
    const tree = renderer.render(
      <Popover title="Popup title" content="String content">
        <span>Trigger content</span>
      </Popover>
    );

    expect(tree).toMatchSnapshot();
  });

  it("renders Popover on the left", () => {
    const tree = renderer.render(
      <Popover title="Popup title" content="String content" placement="left">
        <span>Trigger content</span>
      </Popover>
    );

    expect(tree).toMatchSnapshot();
  });

  it("renders Popover on the right", () => {
    const tree = renderer.render(
      <Popover title="Popup title" content="String content" placement="right">
        <span>Trigger content</span>
      </Popover>
    );

    expect(tree).toMatchSnapshot();
  });

  it("renders Popover on top", () => {
    const tree = renderer.render(
      <Popover title="Popup title" content="String content" placement="top">
        <span>Trigger content</span>
      </Popover>
    );

    expect(tree).toMatchSnapshot();
  });

  it("renders Popover on bottom", () => {
    const tree = renderer.render(
      <Popover title="Popup title" content="String content" placement="bottom">
        <span>Trigger content</span>
      </Popover>
    );

    expect(tree).toMatchSnapshot();
  });

  it("renders with focus as trigger if does not pass pass trigger", () => {
    const tree = renderer.render(
      <Popover title="Popup title" content="String content">
        <span>Trigger content</span>
      </Popover>
    );

    expect(tree).toMatchSnapshot();
  });

  it("renders with click as trigger", () => {
    const tree = renderer.render(
      <Popover title="Popup title" content="String content" trigger="click">
        <span>Trigger content</span>
      </Popover>
    );

    expect(tree).toMatchSnapshot();
  });

  it("renders with hover as trigger", () => {
    const tree = renderer.render(
      <Popover title="Popup title" content="String content" trigger="hover">
        <span>Trigger content</span>
      </Popover>
    );

    expect(tree).toMatchSnapshot();
  });

  it("renders with focus as trigger", () => {
    const tree = renderer.render(
      <Popover title="Popup title" content="String content" trigger="focus">
        <span>Trigger content</span>
      </Popover>
    );

    expect(tree).toMatchSnapshot();
  });

  it("renders with focus as trigger", () => {
    const content = (
      <div>
        <strong>asdasda</strong>
        <p>asdsad</p>
      </div>
    );
    const tree = renderer.render(
      <Popover title="Popup title" content={content}>
        <span>Trigger content</span>
      </Popover>
    );

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific className", () => {
    const tree = renderer.render(
      <Popover title="Popup title" content="String content" className="my-class">
        <span>Trigger content</span>
      </Popover>
    );

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific id", () => {
    const tree = renderer.render(
      <Popover title="Popup title" content="String content" id="my-id">
        <span>Trigger content</span>
      </Popover>
    );

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific attributes", () => {
    const tree = renderer.render(
      <Popover title="Popup title" content="String content" data-id="0">
        <span>Trigger content</span>
      </Popover>
    );

    expect(tree).toMatchSnapshot();
  });
});
