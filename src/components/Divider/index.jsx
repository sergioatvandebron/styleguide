import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

class Divider extends PureComponent {
  render() {
    const { className, children, vertical, ...props } = this.props;

    return (
      <span
        className={classnames(
          'Van-Divider',
          {
            'Van-Divider--vertical': vertical
          },
          className
        )}
        {...props}
      >
        <span className="Van-Divider-content">{children}</span>
      </span>
    );
  }
}

Divider.defaultProps = {
  className: '',
  children: '',
  vertical: false
};

Divider.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  vertical: PropTypes.bool
};

export default Divider;
