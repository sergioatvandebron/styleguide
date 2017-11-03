import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Span extends PureComponent {
  getClass(className) {
    let classes = ['Van-Span'];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    classes.push(className);

    return classes.join(' ');
  }

  render() {
    return <span className={this.getClass()}>{this.props.children}</span>;
  }
}

Span.propTypes = {
  className: PropTypes.string
};

export default Span;
