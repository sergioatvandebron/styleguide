import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './styles.scss';

const DashboardMenu = ({ children, ...props }) => (
  <nav className="Van-DashboardMenu" {...props}>
    <ul className="Van-DashboardMenu-nav">{children}</ul>
  </nav>
);

DashboardMenu.defaultProps = {
  children: null
};

DashboardMenu.propTypes = {
  children: PropTypes.node
};

DashboardMenu.Item = Item;

export default DashboardMenu;
