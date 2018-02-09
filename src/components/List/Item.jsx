import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

class Item extends PureComponent {
  render() {
    const { className, children, ...props } = this.props;

    return (
      <li className={classnames('Van-List-item', className)} {...props}>
        {children}
      </li>
    );
  }
}

Item.defaultProps = {
  className: '',
  children: ''
};

Item.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Item;
