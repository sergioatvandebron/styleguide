import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Paragraph extends PureComponent {
  getClass(className) {
    let classes = ['Van-Paragraph'];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    classes.push(className);

    return classes.join(' ');
  }

  render() {
    return <p className={this.getClass()}>{this.props.children}</p>;
  }
}

Paragraph.propTypes = {
  className: PropTypes.string
};

export default Paragraph;
