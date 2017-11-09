import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Label extends PureComponent {
  getClass(className) {
    let classes = ['Van-Label']

    if(this.props.className) {
      classes.push(this.props.className);
    }

    classes.push(className);

    return classes.join(' ');
  }

  render() {
    return (
      <label className={this.getClass()}>{this.props.children}</label>
    );
  }
}

export default Label;
