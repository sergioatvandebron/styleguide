import React from 'react';
import {render, shallow} from 'enzyme';
import List from '../';

describe("<List/>", () => {
  it("renders regular list", () => {
    const wrapper = render(<List items={["Item 1", "Item 2"]}/>);
    const list = wrapper.find('ul');

    expect(list[0].attribs.class).toBe("Van-List");
    expect(list.length).toEqual(1);

    const elements_on_list = list.find('li');
    expect(elements_on_list.length).toBe(2);

    const first_element = elements_on_list[0];
    expect(first_element.attribs.class).toBe("Van-List-item");
    expect(first_element.children[0].data).toBe("Item 1");

    const second_element = elements_on_list[1];
    expect(second_element.attribs.class).toBe("Van-List-item");
    expect(second_element.children[0].data).toBe("Item 2");
  });

  it("renders regular list with multiple custom CSS classes", () => {
    const wrapper = render(<List items={["Item 1"]} className = "class 1 class2"/>);
    const list = wrapper.find('ul');

    expect(list[0].attribs.class).toBe("Van-List class 1 class2");
  });

  it("renders unstyled list", () => {
    const wrapper = render(<List items={["Item 1", "Item 2"]} unstyled/>);
    const list = wrapper.find('ul');

    expect(list[0].attribs.class).toBe("Van-List Van-List--unstyled");
  });

  it("renders unstyled list with multiple custom CSS classes", () => {
    const wrapper = render(<List items={["Item 1"]} unstyled className = "class 1 class2"/>);
    const list = wrapper.find('ul');

    expect(list[0].attribs.class).toBe("Van-List class 1 class2 Van-List--unstyled");
  });
});
