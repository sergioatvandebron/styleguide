import React from 'react';
import renderer from 'react-test-renderer';
import DashboardMenu from '../';

describe('<DashboardMenu>', () => {
  it("renders DashboardMenu", () => {
    const tree = renderer.create(
      <DashboardMenu>
        <DashboardMenu.Item href="/ev/overzicht" title="Overzicht">
          Overzicht
        </DashboardMenu.Item>
        <DashboardMenu.Item href="/ev/laadpassen" title="Laadpassen">
          Laadpassen
        </DashboardMenu.Item>
      </DashboardMenu>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders active item", () => {
    const tree = renderer.create(
      <DashboardMenu>
        <DashboardMenu.Item href="/ev/overzicht" title="Overzicht" active>
          Overzicht
        </DashboardMenu.Item>
        <DashboardMenu.Item href="/ev/laadpassen" title="Laadpassen">
          Laadpassen
        </DashboardMenu.Item>
      </DashboardMenu>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific className", () => {
    const tree = renderer.create(
      <DashboardMenu className="my-class">
        <DashboardMenu.Item className="my-class" href="/ev/overzicht" title="Overzicht">
          Overzicht
        </DashboardMenu.Item>
        <DashboardMenu.Item href="/ev/laadpassen" title="Laadpassen">
          Laadpassen
        </DashboardMenu.Item>
      </DashboardMenu>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with specific attributes", () => {
    const tree = renderer.create(
      <DashboardMenu data-id="0">
        <DashboardMenu.Item data-id="0" href="/ev/overzicht" title="Overzicht">
          Overzicht
        </DashboardMenu.Item>
        <DashboardMenu.Item href="/ev/laadpassen" title="Laadpassen">
          Laadpassen
        </DashboardMenu.Item>
      </DashboardMenu>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
