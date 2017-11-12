import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Paragraph extends PureComponent {
  getClass(className) {
    const classes = ['Van-Paragraph'];

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

Paragraph.defaultProps = {
  className: '',
  children: '',
};

Paragraph.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.element,
  ]),
};

export default Paragraph;
