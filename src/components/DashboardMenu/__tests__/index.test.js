import React from 'react';
import renderer from 'react-test-renderer';
import DashboardMenu from '../';

describe('<DashboardMenu>', () => {
  it("renders DashboardMenu", () => {
    const tree = renderer.create(
      <DashboardMenu>
        <DashboardMenu.Item>
          Overzicht
        </DashboardMenu.Item>
        <DashboardMenu.Item>
          Laadpassen
        </DashboardMenu.Item>
      </DashboardMenu>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders active item", () => {
    const tree = renderer.create(
      <DashboardMenu>
        <DashboardMenu.Item active>
          Overzicht
        </DashboardMenu.Item>
        <DashboardMenu.Item>
          Laadpassen
        </DashboardMenu.Item>
      </DashboardMenu>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders menu with a link element", () => {
    const tree = renderer.create(
      <DashboardMenu>
        <DashboardMenu.Item>
          <a href="#">Overzicht</a>
        </DashboardMenu.Item>
        <DashboardMenu.Item>
          <a href="#">Laadpassen</a>
        </DashboardMenu.Item>
      </DashboardMenu>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific className", () => {
    const tree = renderer.create(
      <DashboardMenu className="my-class">
        <DashboardMenu.Item className="my-class">
          Overzicht
        </DashboardMenu.Item>
        <DashboardMenu.Item>
          Laadpassen
        </DashboardMenu.Item>
      </DashboardMenu>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific attributes", () => {
    const tree = renderer.create(
      <DashboardMenu data-id="0">
        <DashboardMenu.Item data-id="0">
          Overzicht
        </DashboardMenu.Item>
        <DashboardMenu.Item>
          Laadpassen
        </DashboardMenu.Item>
      </DashboardMenu>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
