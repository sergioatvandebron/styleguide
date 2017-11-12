import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Grid extends PureComponent {
  render() {
    return <div className="row">{this.props.children}</div>;
  }
}

Grid.defaultProps = {
  children: '',
};

Grid.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.element,
  ]),
};

export default Grid;
