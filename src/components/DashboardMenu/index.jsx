import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Item from './Item';
import './styles.scss';

const DashboardMenu = ({ className, children, ...props }) => (
  <nav className={classnames('Van-DashboardMenu', className)} {...props}>
    <ul className="Van-DashboardMenu-nav">{children}</ul>
  </nav>
);

DashboardMenu.defaultProps = {
  children: null,
  className: null
};

DashboardMenu.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

DashboardMenu.Item = Item;

export default DashboardMenu;
