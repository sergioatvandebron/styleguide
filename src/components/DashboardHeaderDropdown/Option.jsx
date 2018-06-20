import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

class Option extends React.Component {
  handleClickAndClose = ev => {
    this.props.handleClick(ev);
    this.props.closeMenu();
  }

  render() {
    const { icon, caption, subcaption } = this.props;

    return (
      <div className="Van-DashboardHeaderDropdownEntry" onClick={this.handleClickAndClose}>
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
  closeMenu: PropTypes.func
};

Option.defaultProps = {
  icon: null,
  subcaption: null,
  closeMenu() {}
};

export default Option;
