import React from 'react';
import {shallow, render} from 'enzyme';
import Divider from '../';

describe('<Devider><Devider>', () => {
  it('renders devider', () => {
    const wrapper = render(<Divider/>);
    const divider = wrapper.find('span');

    var parentSpan = divider[0];
    var childSpan = divider[1];

    expect(parentSpan.attribs.class).toBe('Van-Divider ');
    expect(childSpan.attribs.class).toBe('Van-Divider-content');
    expect(divider.length).toBe(2);
  });

  it('renders devider with content', () => {
    const wrapper = render(<Divider> content </Divider>);
    const divider = wrapper.find('span');

    var content = divider[1].children[0];

     expect(content.data).toBe(' content ');
     expect(content.type).toBe('text');
  });

  it('renders component with multiple classes', () => {
    const wrapper = render(<Divider className="class1 class2" > content </Divider>);
    const divider = wrapper.find('span');

    expect(divider[0].attribs.class).toBe('Van-Divider class1 class2 ');
  });
});
