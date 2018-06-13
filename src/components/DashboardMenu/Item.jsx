import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

const Item = ({ active, className, onClick, children, ...props }) => (
  <li
    className={classnames(
      'Van-DashboardMenu-item',
      { 'Van-DashboardMenu-item--active': active },
      className
    )}
    role="presentation"
    onClick={onClick}
    {...props}
  >
    {children}
  </li>
);

Item.defaultProps = {
  children: null,
  active: false,
  onClick: undefined,
  className: ''
};

Item.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool
};

export default Item;
