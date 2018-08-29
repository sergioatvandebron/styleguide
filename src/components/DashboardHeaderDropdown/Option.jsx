import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon';

class Option extends React.Component {
  handleClickAndClose = (ev, inactive) => {
    if (inactive) {
      return;
    }
    this.props.handleClick(ev);
    this.props.closeMenu();
  };

  render() {
    const { icon, caption, subcaption, inactive } = this.props;
    const className = {
      inactive
    };

    return (
      <div
        className={classnames('Van-DashboardHeaderDropdownEntry', className)}
        onClick={ev => this.handleClickAndClose(ev, inactive)}
      >
        {icon !== null && (
          <div className="Van-DashboardHeaderDropdownEntry-iconWrapper">
            <Icon source={icon} />
          </div>
        )}

        <div className="Van-DashboardHeaderDropdownEntry-option">
          <div className="Van-DashboardHeaderDropdownEntry-caption">{caption}</div>

          {subcaption && (
            <div className="Van-DashboardHeaderDropdownEntry-subcaption">{subcaption}</div>
          )}
        </div>
      </div>
    );
  }
}

Option.propTypes = {
  icon: PropTypes.string,
  caption: PropTypes.node.isRequired,
  subcaption: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  closeMenu: PropTypes.func,
  inactive: PropTypes.bool
};

Option.defaultProps = {
  icon: null,
  subcaption: null,
  closeMenu: () => {},
  inactive: undefined
};

export default Option;
