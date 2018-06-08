import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Label from '../';

configure({ adapter: new Adapter() });

describe("<Label/>", () => {
  it("renders label with default component css class", () => {
    const wrapper = mount(<Label>label content</Label>);
    const label = wrapper.find('label');

    expect(label.hasClass('Van-Label')).toBe(true);
    expect(label.text()).toBe('label content');
  });

  it("renders label with multiple css classes", () => {
    const wrapper = mount(<Label className="class1 class2"> label content </Label>);
    expect(wrapper.find('label').hasClass('Van-Label')).toBe(true);
  });
});
