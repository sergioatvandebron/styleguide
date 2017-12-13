import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

class SkeletonCard extends PureComponent {
  render() {
    const {
      className,
      children,
      ...props
    } = this.props;

    return (
      <div
        className={classnames('Van-SkeletonCard', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
}

SkeletonCard.defaultProps = {
  className: '',
  children: '',
};

SkeletonCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
};

export default SkeletonCard;
