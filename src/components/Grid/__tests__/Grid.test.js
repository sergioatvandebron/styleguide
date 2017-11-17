import React from 'react';
import renderer from 'react-test-renderer';
import Grid from '../';

describe("<Grid>", () => {
  it("renders grid", () => {
    const tree = renderer.create(
      <Grid>My Grid</Grid>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific className", () => {
    const tree = renderer.create(
      <Grid className="my-class">My Grid</Grid>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific attributes", () => {
    const tree = renderer.create(
      <Grid data-id="0">My Grid</Grid>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
})
