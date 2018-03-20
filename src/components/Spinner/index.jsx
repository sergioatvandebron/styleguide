import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon';
import iconBio from '../../assets/icons/ftic/bio.svg';
import iconHydro from '../../assets/icons/ftic/hydro.svg';
import iconSun from '../../assets/icons/ftic/sun.svg';
import iconWind from '../../assets/icons/ftic/wind.svg';
import './style.scss';

const Spinner = ({ children, fullScreen }) => (
  <div className={classnames('Van-Spinner', { 'Van-Spinner--FullScreen': fullScreen })}>
    <div className="Van-Spinner-IconContainer">
      <Icon source={iconBio} className="Van-Spinner-Icon Van-Spinner-Bio" />
      <Icon source={iconHydro} className="Van-Spinner-Icon Van-Spinner-Hydro" />
      <Icon source={iconSun} className="Van-Spinner-Icon Van-Spinner-Sun" />
      <Icon source={iconWind} className="Van-Spinner-Icon Van-Spinner-Wind" />
    </div>

    {children && <div className="Van-Spinner-Content">{children}</div>}
  </div>
);

Spinner.defaultProps = {
  children: null,
  fullScreen: false
};

Spinner.propTypes = {
  children: PropTypes.node,
  fullScreen: PropTypes.bool
};

export default Spinner;
