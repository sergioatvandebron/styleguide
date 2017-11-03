import React from 'react';
import {shallow, render} from 'enzyme';
import Label from '../';

describe("<Label/>", () => {
  it("renders label with default component css class", () => {
    const wrapper = render(<Label> label content </Label>);
    const label = wrapper.find('label');

    expect(label[0].attribs.class).toBe('Van-Label ');

    var label_content = label[0].children[0].data;
    expect(label_content).toBe(" label content ");
  });

  it("renders label with multiple css classes", () => {
    const wrapper = render(<Label className="class1 class2"> label content </Label>);
    const label = wrapper.find('label');

    expect(label[0].attribs.class).toBe('Van-Label class1 class2 ');
  });
});
