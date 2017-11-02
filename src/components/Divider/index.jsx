import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Divider extends PureComponent {
  getClass(className) {
    let classes = ['Van-Divider'];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    classes.push(className);

    return classes.join(' ');
  }

  render() {
    return <span className={this.getClass()}>
      <span className="Van-Divider-content">{this.props.children}</span>
    </span>;
  }
}

Divider.propTypes = {
  className: PropTypes.string
};

export default Divider;
