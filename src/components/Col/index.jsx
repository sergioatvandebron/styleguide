import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Col extends PureComponent {
  getClass() {
    let className = 'col-';

    if (typeof this.props.sm === 'string') {
      className += `sm-${this.props.sm}`;
    } else if (typeof this.props.md === 'string') {
      className += `md-${this.props.md}`;
    } else if (typeof this.props.lg === 'string') {
      className += `lg-${this.props.lg}`;
    }

    return className;
  }

  render() {
    return <div className={this.getClass()}>{this.props.children}</div>;
  }
}

Col.defaultProps = {
  sm: '',
  md: '',
  lg: '',
  children: '',
};

Col.propTypes = {
  sm: PropTypes.string,
  md: PropTypes.string,
  lg: PropTypes.string,
  children: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.element,
  ]),
};

export default Col;
