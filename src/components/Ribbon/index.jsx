import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

class Ribbon extends PureComponent {
  render() {
    const { className, children, ...props } = this.props;

    return (
      <span className={classnames('Van-Ribbon', className)} {...props}>
        {children}
      </span>
    );
  }
}

Ribbon.defaultProps = {
  className: '',
  children: ''
};

Ribbon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Ribbon;
