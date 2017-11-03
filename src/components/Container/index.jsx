import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.css';

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

Container.propTypes = {
  fluid: PropTypes.bool
};

export default Container;
