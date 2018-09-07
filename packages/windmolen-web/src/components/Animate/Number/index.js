import React, { Component } from 'react';
import AnimateBase from '../Base';

class AnimateNumber extends AnimateBase {
  render() {
    console.log('this', this)
    return (
      <div className="AnimateNumber" ref={(node) => { this.viewportElement = node }}>
        Animate Number.
      </div>
    )
  }
}

export default AnimateNumber;
