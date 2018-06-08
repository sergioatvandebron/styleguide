import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Icon';

const Option = ({ icon, caption, subcaption, handleClick }) => (
  <div className="Van-DashboardHeaderDropdownEntry" onClick={handleClick}>
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

Option.propTypes = {
  icon: PropTypes.string,
  caption: PropTypes.node.isRequired,
  subcaption: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

Option.defaultProps = {
  icon: null,
  subcaption: null
};

export default Option;
