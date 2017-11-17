import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

class Container extends PureComponent {
  render() {
    const {
      className,
      children,
      fluid,
      ...props
    } = this.props;

    return (
      <div
        className={classnames({
          container: !fluid,
          'container-fluid': fluid,
        }, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
}

Container.defaultProps = {
  className: '',
  fluid: false,
  children: '',
};

Container.propTypes = {
  className: PropTypes.string,
  fluid: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
};

export default Container;
