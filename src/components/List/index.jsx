import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Item from './Item';
import './style.scss';

class List extends PureComponent {
  render() {
    const { className, unstyled, children, ...props } = this.props;

    return (
      <ul
        className={classnames(
          'Van-List',
          {
            'Van-List--unstyled': unstyled
          },
          className
        )}
        {...props}
      >
        {children}
      </ul>
    );
  }
}

List.Item = Item;

List.defaultProps = {
  className: '',
  children: [],
  unstyled: false
};

List.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  unstyled: PropTypes.bool
};

export default List;
