import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

class SkeletonDisplayText extends PureComponent {
  render() {
    const {
      className,
      size,
      full,
      ...props
    } = this.props;
    return (
      <div
        className={classnames('Van-SkeletonDisplayText', {
          'Van-SkeletonDisplayText--small': size === 'small',
          'Van-SkeletonDisplayText--medium': size === 'medium',
          'Van-SkeletonDisplayText--large': size === 'large',
          'Van-SkeletonDisplayText--extraLarge': size === 'extraLarge',
          'Van-SkeletonDisplayText--full': full,
        }, className)}
        {...props}
      />
    );
  }
}

SkeletonDisplayText.defaultProps = {
  className: '',
  size: 'medium',
  full: false,
};

SkeletonDisplayText.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large',
    'extraLarge',
  ]),
  full: PropTypes.bool,
};

export default SkeletonDisplayText;
