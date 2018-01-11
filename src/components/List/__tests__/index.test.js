import React from 'react';
import renderer from 'react-test-renderer';
import List from '../';

describe("<List>", () => {
  it("renders regular list", () => {
    const tree = renderer.create(
      <List
        items={[
          { text: 'Item 1' },
          { text: 'Item 2' },
        ]}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders an empty list", () => {
    const tree = renderer.create(
      <List items={[]} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders an empty list if you don't pass items", () => {
    const tree = renderer.create(
      <List />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders unstyled list", () => {
    const tree = renderer.create(
      <List
        items={[
          { text: 'Item 1' },
          { text: 'Item 2' },
        ]}
        unstyled
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders list with icons", () => {
    const tree = renderer.create(
      <List
        items={[
          {
            text: 'Item 1',
            icon: 'check',
          },
          {
            text: 'Item 2',
            icon: 'close',
          },
          {
            text: 'Item 3',
            icon: 'facebook',
          },
          {
            text: 'Item 4',
            icon: 'instagram',
          },
        ]}
        unstyled
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific className", () => {
    const tree = renderer.create(
      <List
        items={[
          { text: 'Item 1' },
          { text: 'Item 2' },
        ]}
        className="my-class"
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific attributes", () => {
    const tree = renderer.create(
      <List
        items={[
          { text: 'Item 1' },
          { text: 'Item 2' },
        ]}
        data-id="0"
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
