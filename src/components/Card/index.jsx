import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

class Card extends PureComponent {
  render() {
    const { className, shadow, children, ...props } = this.props;

    return (
      <div
        className={classnames('Van-Card', className, {
          'Van-Card--withShadow': shadow
        })}
        {...props}
      >
        {children}
      </div>
    );
  }
}

Card.defaultProps = {
  className: '',
  shadow: false,
  children: ''
};

Card.propTypes = {
  className: PropTypes.string,
  shadow: PropTypes.bool,
  children: PropTypes.node
};

export default Card;
