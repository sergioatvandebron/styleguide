import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

class Button extends PureComponent {
  render() {
    const { className, theme, size, full, inverted, children, ...props } = this.props;

    return (
      <button
        className={classnames('Van-Button', className, {
          'Van-Button--primary': theme === 'primary',
          'Van-Button--info': theme === 'info',
          'Van-Button--warning': theme === 'warning',
          'Van-Button--danger': theme === 'danger',
          'Van-Button--success': theme === 'success',

          'Van-Button--small': size === 'small',
          'Van-Button--compact': size === 'compact',
          'Van-Button--big': size === 'big',

          'Van-Button--full': full,

          'Van-Button--inverted': inverted
        })}
        {...props}
      >
        {children instanceof Array
          ? children.map(c => (typeof c === 'string' ? <span key={c}>{c}</span> : c))
          : children}
      </button>
    );
  }
}

Button.defaultProps = {
  className: '',
  theme: '',
  size: '',
  full: false,
  inverted: false,
  children: ''
};

Button.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf(['', 'primary', 'info', 'warning', 'danger', 'success']),
  size: PropTypes.oneOf(['', 'small', 'compact', 'big']),
  full: PropTypes.bool,
  inverted: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default Button;
