import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../../Icon';
import angleUp from '../../../assets/icons/fa/angle-up.svg';
import angleDown from '../../../assets/icons/fa/angle-down.svg';
import SectionHeader from './SectionHeader';
import Option from './Option';

class DashboardHeaderDropdown extends React.Component {
  static propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    children: PropTypes.node,
  };

  static defaultProps = {
    subtitle: null,
    children: null,
    icon: null,
  };

  state = {
    isActive: false
  };

  toggleMenu = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  closeMenu = () => {
    this.setState({ isActive: false });
  };

  preventDefault = ev => ev.preventDefault();

  render() {
    const { title, subtitle, icon, children } = this.props;
    const { isActive } = this.state;
    const classes = classnames('Van-DashboardHeaderDropdown', {
      'Van-DashboardHeaderDropdown--active': this.state.isActive
    });

    return (
      <div className={classes}>
        <div
          className="Van-DashboardHeaderDropdown-captionWrapper"
          onClick={this.toggleMenu}
          onBlur={this.closeMenu}
          tabIndex="0"
        >
          {icon && (
            <div className="Van-DashboardHeaderDropdown-iconWrapper">
              <Icon source={icon} />
            </div>
          )}

          <div className="Van-DashboardHeaderDropdown-caption">
            <div className="Van-DashboardHeaderDropdown-title">{title}</div>
            {subtitle && <div className="Van-DashboardHeaderDropdown-subtitle">{subtitle}</div>}
          </div>

          <div className="Van-DashboardHeaderDropdown-toggle">
            <Icon source={isActive ? angleUp : angleDown} />
          </div>
        </div>

        {children && isActive && (
          <div className="Van-DashboardHeaderDropdown-optionWrapper" onMouseDown={this.preventDefault}>
            {children}
          </div>)}
      </div>
    );
  }
}

DashboardHeaderDropdown.SectionHeader = SectionHeader;
DashboardHeaderDropdown.Option = Option;

export default DashboardHeaderDropdown;
