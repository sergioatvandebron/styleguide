import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon';
import sunIcon from '../../assets/icons/ftic/sun.svg';
import './style.scss';

class Sticker extends PureComponent {
  render() {
    const { className, children, type, ...props } = this.props;

    return (
      <span
        className={classnames(
          'Van-Sticker',
          {
            'Van-Sticker--circle': type === 'circle',
            'Van-Sticker--splash': type === 'splash'
          },
          className
        )}
        {...props}
      >
        {type === 'splash' && (
          <Icon source={sunIcon} className="Van-Sticker-icon Van-u-color-yellow-primary" />
        )}
        {typeof children === 'string' ? <span>{children}</span> : children}
      </span>
    );
  }
}

Sticker.defaultProps = {
  className: '',
  children: '',
  type: 'circle'
};

Sticker.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.oneOf(['circle', 'splash'])
};

export default Sticker;
