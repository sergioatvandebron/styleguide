import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

class Sticker extends PureComponent {
  render() {
    const { className, children, ...props } = this.props;

    return (
      <span className={classnames('Van-Sticker', className)} {...props}>
        {children}
      </span>
    );
  }
}

Sticker.defaultProps = {
  className: '',
  children: ''
};

Sticker.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Sticker;
