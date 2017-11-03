import React from 'react';
import Grid from '../';
import {render, shallow} from 'enzyme';

describe("<Grid>", () => {
  it("renders grid", () => {
    const wrapper = render(<Grid>content</Grid>);
    const grid = wrapper.find('div');

    const grid_content = grid[0].children[0].data;
    expect(grid.length).toEqual(1);
    expect(grid[0].attribs.class).toBe("row");
    expect(grid_content).toBe("content")
  });
})
