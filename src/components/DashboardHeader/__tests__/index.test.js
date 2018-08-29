import React from 'react';
import renderer from 'react-test-renderer';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DashboardHeader from '..';
import DashboardHeaderDropdown from '../../DashboardHeaderDropdown';
import DashboardHeaderNotifications from '../../DashboardHeaderNotifications';
import checkIcon from '../../../../dist/icons/check.svg';
import treeIcon from '../../../../dist/icons/tree-ftic.svg';
import drinksIcon from '../../../../dist/icons/drinks.svg';
import gearIcon from '../../../../dist/icons/gear.svg';

configure({ adapter: new Adapter() });

describe('<DashboardHeader />', () => {
  it('renders the correct markup', () => {
    const tree = renderer.create(<DashboardHeader />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('correctly renders children', () => {
    const tree = renderer.create(
      <DashboardHeader>
        <DashboardHeaderDropdown title="One dropdown" icon={treeIcon}>
          <DashboardHeaderDropdown.Option caption="One level" handleClick={() => {}} />
          <DashboardHeaderDropdown.Option caption="Two levels" subcaption="With a subcaption" handleClick={() => {}} />
        </DashboardHeaderDropdown>

        <DashboardHeaderDropdown title="Two dropdowns" icon={drinksIcon}>
          <DashboardHeaderDropdown.SectionHeader title="This one has a header" />
          <DashboardHeaderDropdown.Option caption="Wow, icons!" subcaption="So cool" icon={gearIcon} handleClick={() => {}} />
        </DashboardHeaderDropdown>

        <DashboardHeaderNotifications>
          <DashboardHeaderNotifications.Notification title="You got notifications" close={() => {}}>
            <div>
              One line<br />
              And a second line
            </div>
          </DashboardHeaderNotifications.Notification>
        </DashboardHeaderNotifications>
      </DashboardHeader>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('<DashboardHeaderDropdown.Option', () => {
  it('calls the callback `handleClick` and closes the menu when an option is clicked', () => {
    const handleClick = jest.fn();
    const closeMenu = jest.fn();
    const component = mount(
      <DashboardHeaderDropdown.Option handleClick={handleClick} closeMenu={closeMenu} caption="test" />
    );

    component.find('.Van-DashboardHeaderDropdownEntry').simulate('click');
    expect(handleClick.mock.calls.length).toBe(1);
    expect(closeMenu.mock.calls.length).toBe(1);
  });

  it('renders inactive dropdown icon', () => {
    const handleClick = jest.fn();
    const closeMenu = jest.fn();
    const component = mount(
      <DashboardHeaderDropdown.Option
        inactive={true}
        caption="Inactive item"
        subcaption="Inactive item with a subcaption"
        handleClick={() => {}}
      />
    );

    const inactiveDropdownItem = component.find('.Van-DashboardHeaderDropdownEntry');
    expect(inactiveDropdownItem.hasClass('inactive')).toBe(true);
    component.find('.Van-DashboardHeaderDropdownEntry').simulate('click');
    expect(handleClick.mock.calls.length).toBe(0);
    expect(closeMenu.mock.calls.length).toBe(0);
  });
});

describe('<DashboardHeaderNotifications.Notification', () => {
  it('calls the callback `close` when the close icon is clicked', () => {
    const mock = jest.fn();
    const component = mount(
      <DashboardHeaderNotifications.Notification title="title" close={mock} children="" />
    );

    component.find('.Van-DashboardHeaderNotifications-notificationClose').simulate('click');
    expect(mock.mock.calls.length).toBe(1);
  });
});
