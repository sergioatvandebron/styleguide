import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

// TODO: add icon part!
class List extends PureComponent {
  getClass() {
    let classes = ['Van-List'];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    if (this.props.unstyled) {
      classes.push('Van-List--unstyled');
    }

    return classes.join(' ');
  }

  render() {
    return (
      <ul className={this.getClass()}>
        {this.props.items.map(item => {
          return <li className="Van-List-item">{item}</li>
        })}
      </ul>
    );
  }
}

List.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
  unstyled: PropTypes.bool
};

export default List;
