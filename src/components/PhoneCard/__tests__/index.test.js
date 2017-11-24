import React from 'react';
import renderer from 'react-test-renderer';
import PhoneCard from '../';

describe("<PhoneCard>", () => {
  it("renders PhoneCard", () => {
    const tree = renderer.create(
      <PhoneCard
        number="1234567890"
        description="PhoneCard description"
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders PhoneCard with border", () => {
    const tree = renderer.create(
      <PhoneCard
        withBorder
        number="1234567890"
        description="PhoneCard description"
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific className", () => {
    const tree = renderer.create(
      <PhoneCard
        number="1234567890"
        description="PhoneCard description"
        className="my-class"
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific attributes", () => {
    const tree = renderer.create(
      <PhoneCard
        number="1234567890"
        description="PhoneCard description"
        data-id="0"
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
