import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Divider extends PureComponent {
  getClass(className) {
    const classes = ['Van-Divider'];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    classes.push(className);

    return classes.join(' ');
  }

  render() {
    return (
      <span className={this.getClass()}>
        <span className="Van-Divider-content">{this.props.children}</span>
      </span>
    );
  }
}

Divider.defaultProps = {
  className: '',
  children: '',
};

Divider.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.element,
  ]),
};

export default Divider;
