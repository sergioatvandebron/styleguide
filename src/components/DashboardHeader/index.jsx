import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/icons/vandebron.svg';
import './styles.scss';

/* eslint-disable react/no-danger */
const DashboardHeader = props => (
  <header className="Van-DashboardHeader">
    <section className="Van-DashboardHeader-logoWrapper">
      <div className="Van-DashboardHeader-logoText">Mijn</div>
      <span className="Van-DashboardHeader-logo" dangerouslySetInnerHTML={{ __html: logo }} />
    </section>

    {props.children && <section className="Van-DashboardHeader-addons">{props.children}</section>}
  </header>
);

DashboardHeader.defaultProps = {
  children: null
};

DashboardHeader.propTypes = {
  children: PropTypes.node
};

export default DashboardHeader;
export { default as DashboardHeaderDropdown } from './DashboardHeaderDropdown';
export { default as DashboardHeaderNotifications } from './DashboardHeaderNotifications';
