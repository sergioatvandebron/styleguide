import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

class Button extends PureComponent {
  render() {
    const {
      className,
      theme,
      size,
      full,
      inverted,
      shape,
      grayscale,
      link,
      children,
      ...props
    } = this.props;

    const CustomTag = link ? 'a' : 'button';

    return (
      <CustomTag
        className={classnames('Van-Button', className, {
          'Van-Button--primary': theme === 'primary',
          'Van-Button--info': theme === 'info',
          'Van-Button--warning': theme === 'warning',
          'Van-Button--danger': theme === 'danger',
          'Van-Button--success': theme === 'success',
          'Van-Button--facebook': theme === 'facebook',

          'Van-Button--small': size === 'small',
          'Van-Button--compact': size === 'compact',
          'Van-Button--big': size === 'big',

          'Van-Button--full': full,

          'Van-Button--square': shape === 'square',
          'Van-Button--circle': shape === 'circle',

          'Van-Button--inverted': inverted,

          'Van-Button--grayscale': grayscale
        })}
        {...props}
      >
        {children instanceof Array
          ? children.map(
              c =>
                typeof c === 'string' ? (
                  <span key={c} className="Van-Button-text">
                    {c}
                  </span>
                ) : (
                  c
                )
            )
          : children}
      </CustomTag>
    );
  }
}

Button.defaultProps = {
  className: '',
  theme: '',
  size: '',
  full: false,
  inverted: false,
  grayscale: false,
  shape: '',
  link: false,
  children: ''
};

Button.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf(['', 'primary', 'info', 'warning', 'danger', 'success', 'facebook']),
  size: PropTypes.oneOf(['', 'small', 'compact', 'big']),
  full: PropTypes.bool,
  inverted: PropTypes.bool,
  grayscale: PropTypes.bool,
  shape: PropTypes.oneOf(['', 'square', 'circle']),
  link: PropTypes.bool,
  children: PropTypes.node
};

export default Button;
