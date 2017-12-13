import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

class Link extends PureComponent {
  render() {
    const {
      className,
      type,
      children,
      ...props
    } = this.props;

    return (
      <a
        className={classnames('Van-Link', className, {
          'Van-Link--secondary': type === 'secondary',
        })}
        {...props}
      >
        {children}
      </a>
    );
  }
}

Link.defaultProps = {
  className: '',
  type: '',
  children: '',
};

Link.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf([
    '',
    'secondary',
  ]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
};

export default Link;
