import React from 'react';
import {render, shallow} from 'enzyme';
import Button from '../';

describe("<Button>", () => {
  it("renders primary button type", () => {
      const wrapper = render(<Button type='primary'> name </Button>);
      const button = wrapper.find('button');

      const buttonName = button[0].children[0].data
      expect(buttonName).toBe(" name ");

      expect(button.length).toEqual(1);
      expect(button[0].attribs.class).toEqual('Van-Button Van-Button--primary');
  });

  it("renders information button type", () => {
      const wrapper = render(<Button type='info'> name </Button>);
      const button = wrapper.find('button');

      expect(button[0].attribs.class).toEqual('Van-Button Van-Button--info');
  });

  it("renders warning button type", () => {
      const wrapper = render(<Button type='warning'> name </Button>);
      const button = wrapper.find('button');

      expect(button[0].attribs.class).toEqual('Van-Button Van-Button--warning');
  });

  it("renders danger button type", () => {
      const wrapper = render(<Button type='danger'> name </Button>);
      const button = wrapper.find('button');

      expect(button[0].attribs.class).toEqual('Van-Button Van-Button--danger');
  });

  it("renders success button type", () => {
      const wrapper = render(<Button type='success'> name </Button>);
      const button = wrapper.find('button');

      expect(button[0].attribs.class).toEqual('Van-Button Van-Button--success');
  });

  it("renders success button type", () => {
      const wrapper = render(<Button type='success'> name </Button>);
      const button = wrapper.find('button');

      expect(button[0].attribs.class).toEqual('Van-Button Van-Button--success');
  });

  it("renders button with full size", () => {
      const wrapper = render(<Button size="full"> name </Button>);
      const button = wrapper.find('button');

      expect(button[0].attribs.class).toEqual('Van-Button Van-Button--full');
  });

  it("renders button with small size", () => {
      const wrapper = render(<Button size="small"> name </Button>);
      const button = wrapper.find('button');

      expect(button[0].attribs.class).toEqual('Van-Button Van-Button--small');
  });

  it("renders button with compact size", () => {
      const wrapper = render(<Button size="compact"> name </Button>);
      const button = wrapper.find('button');

      expect(button[0].attribs.class).toEqual('Van-Button Van-Button--compact');
  });

  it("renders button with large size", () => {
      const wrapper = render(<Button size="large"> name </Button>);
      const button = wrapper.find('button');

      expect(button[0].attribs.class).toEqual('Van-Button Van-Button--large');
  });

  it("renders button with tiny size", () => {
      const wrapper = render(<Button size="tiny"> name </Button>);
      const button = wrapper.find('button');

      expect(button[0].attribs.class).toEqual('Van-Button Van-Button--tiny');
  });

  it("renders inverted button", () => {
      const wrapper = render(<Button inverted> name </Button>);
      const button = wrapper.find('button');

      expect(button[0].attribs.class).toEqual('Van-Button Van-Button--inverted');
  });

  it("renders button with multiple non default classes", () => {
      const wrapper = render(<Button className ='class1 class2'> name </Button>);
      const button = wrapper.find('button');

      expect(button[0].attribs.class).toEqual('Van-Button class1 class2');
  });

  it("renders primary button type with full size", () => {
      const wrapper = render(<Button type='primary' size='full'> name </Button>);
      const button = wrapper.find('button');

      expect(button[0].attribs.class).toEqual('Van-Button Van-Button--primary Van-Button--full');
  });

  it("renders primary button type with full size", () => {
      const wrapper = render(<Button type='primary' size='full'> name </Button>);
      const button = wrapper.find('button');

      expect(button[0].attribs.class).toEqual('Van-Button Van-Button--primary Van-Button--full');
  });

  it("renders primary button type with small size", () => {
      const wrapper = render(<Button type='primary' size='small'> name </Button>);
      const button = wrapper.find('button');

      expect(button[0].attribs.class).toEqual('Van-Button Van-Button--primary Van-Button--small');
  });

  it("renders primary button type with compact size", () => {
      const wrapper = render(<Button type='primary' size='compact'> name </Button>);
      const button = wrapper.find('button');

      expect(button[0].attribs.class).toEqual('Van-Button Van-Button--primary Van-Button--compact');
  });

  it("renders inverted warning button", () => {
    const wrapper = render(<Button type="warning" inverted> name </Button>);
    const button = wrapper.find('button');

    expect(button[0].attribs.class).toEqual('Van-Button Van-Button--warning Van-Button--inverted');

  })
});
