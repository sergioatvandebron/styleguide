import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

class Button extends PureComponent {
  render() {
    const {
      className,
      type,
      size,
      full,
      inverted,
      children,
      ...props
    } = this.props;

    return (
      <button
        className={classnames('Van-Button', className, {
          'Van-Button--primary': type === 'primary',
          'Van-Button--info': type === 'info',
          'Van-Button--warning': type === 'warning',
          'Van-Button--danger': type === 'danger',
          'Van-Button--success': type === 'success',

          'Van-Button--small': size === 'small',
          'Van-Button--compact': size === 'compact',
          'Van-Button--large': size === 'large',
          'Van-Button--tiny': size === 'tiny',

          'Van-Button--full': full,

          'Van-Button--inverted': inverted,
        })}
        {...props}
      >
        {children instanceof Array ? children.map(c => (
          (typeof c === 'string') ? <span key={c}>{c}</span> : c
        )) : children}
      </button>
    );
  }
}

Button.defaultProps = {
  className: '',
  type: '',
  size: '',
  full: false,
  inverted: false,
  children: '',
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  full: PropTypes.bool,
  inverted: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Button;
