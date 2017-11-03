import React from 'react';
import {shallow, render} from 'enzyme';
import Input from '../';

describe('<Input/>', () => {
  it("renders input text", () => {
    const wrapper = render(<Input meta={{error:null}} type="text"/>)

    const input = wrapper.find('input');
    console.log(input);
    expect(input.length).toEqual(1);
    expect(input[0].attribs.type).toBe("text");
    expect(input[0].attribs.class).toBe('Van-Text-Input');
  });

  it("contains informed className", () => {
    const wrapper = render(<Input meta={{error:null}} type="text" className= "someClassName"/>)

    const input = wrapper.find('input');
    expect(input[0].attribs.class).toBe('Van-Text-Input someClassName');
  });
});
