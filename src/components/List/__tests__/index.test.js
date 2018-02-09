import React from 'react';
import renderer from 'react-test-renderer';
import Icon from '../../Icon';
import List from '../';

describe("<List>", () => {
  it("renders regular list", () => {
    const tree = renderer.create(
      <List>
        <List.Item>Item 1</List.Item>
        <List.Item>Item 2</List.Item>
      </List>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders an empty list", () => {
    const tree = renderer.create(
      <List></List>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders unstyled list", () => {
    const tree = renderer.create(
      <List unstyled>
        <List.Item>Item 1</List.Item>
        <List.Item>Item 2</List.Item>
      </List>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders list with icons", () => {
    const facebookIcon = '<svg xmlns="http://www.w3.org/2000/svg"><path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759H734V905H479V609h255V391q0-186 104-288.5T1115 0q147 0 228 12z"/></svg>';
    const checkIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"><path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z"/></svg>';
    const closeIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792"><path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"/></svg>';
    const instagramIcon = '<svg width="1792" height="1792" xmlns="http://www.w3.org/2000/svg"><path d="M1152 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm138 0q0 164-115 279t-279 115-279-115-115-279 115-279 279-115 279 115 115 279zm108-410q0 38-27 65t-65 27-65-27-27-65 27-65 65-27 65 27 27 65zM896 266q-7 0-76.5-.5t-105.5 0-96.5 3-103 10T443 297q-50 20-88 58t-58 88q-11 29-18.5 71.5t-10 103-3 96.5 0 105.5.5 76.5-.5 76.5 0 105.5 3 96.5 10 103T297 1349q20 50 58 88t88 58q29 11 71.5 18.5t103 10 96.5 3 105.5 0 76.5-.5 76.5.5 105.5 0 96.5-3 103-10 71.5-18.5q50-20 88-58t58-88q11-29 18.5-71.5t10-103 3-96.5 0-105.5-.5-76.5.5-76.5 0-105.5-3-96.5-10-103T1495 443q-20-50-58-88t-88-58q-29-11-71.5-18.5t-103-10-96.5-3-105.5 0-76.5.5zm768 630q0 229-5 317-10 208-124 322t-322 124q-88 5-317 5t-317-5q-208-10-322-124t-124-322q-5-88-5-317t5-317q10-208 124-322t322-124q88-5 317-5t317 5q208 10 322 124t124 322q5 88 5 317z"/></svg>';

    const tree = renderer.create(
      <List unstyled>
        <List.Item>
          <Icon source={checkIcon} /> Item 1
        </List.Item>
        <List.Item>
          <Icon source={closeIcon} /> Item 2
        </List.Item>
        <List.Item>
          <Icon source={facebookIcon} /> Item 3
        </List.Item>
        <List.Item>
          <Icon source={instagramIcon} /> Item 4
        </List.Item>
      </List>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific className", () => {
    const tree = renderer.create(
      <List className="my-class">
        <List.Item>Item 1</List.Item>
        <List.Item>Item 2</List.Item>
      </List>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific attributes", () => {
    const tree = renderer.create(
      <List data-id="0">
        <List.Item>Item 1</List.Item>
        <List.Item>Item 2</List.Item>
      </List>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
