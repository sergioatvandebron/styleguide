import React, { PureComponent } from 'react';
import './style.css';

class Grid extends PureComponent {
  render() {
    return <div className="row">{this.props.children}</div>;
  }
}

export default Grid;
