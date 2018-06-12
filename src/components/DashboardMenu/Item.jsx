import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

const Item = ({ active, href, className, title, children, ...props }) => (
  <li
    className={classnames(
      'Van-DashboardMenu-item',
      { 'Van-DashboardMenu-item--active': active },
      className
    )}
    role="presentation"
    {...props}
  >
    <a className="Van-DashboardMenu-link" href={href} title={title}>
      {children}
    </a>
  </li>
);

Item.defaultProps = {
  children: null,
  href: '',
  active: false,
  className: '',
  title: ''
};

Item.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  active: PropTypes.bool
};

export default Item;
