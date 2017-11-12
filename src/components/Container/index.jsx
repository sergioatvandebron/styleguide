import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Container extends PureComponent {
  getClass() {
    let className = 'container';

    if (this.props.fluid) {
      className += '-fluid';
    }

    return className;
  }
  render() {
    return <div className={this.getClass()}>{this.props.children}</div>;
  }
}

Container.defaultProps = {
  fluid: false,
  children: '',
};

Container.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.element,
  ]),
};

export default Container;
