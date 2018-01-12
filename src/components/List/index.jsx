import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon';
import './style.scss';

class List extends PureComponent {
  render() {
    const { className, unstyled, ...props } = this.props;

    return (
      <ul
        className={classnames(
          'Van-List',
          {
            'Van-List--unstyled': unstyled
          },
          className
        )}
        {...props}
      >
        {this.props.items.map(item => (
          <li className="Van-List-item" key={item.text}>
            {item.icon && <Icon source={item.icon} className="Van-List-icon" />}
            {item.text}
          </li>
        ))}
      </ul>
    );
  }
}

List.defaultProps = {
  className: '',
  items: [],
  unstyled: false
};

List.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      text: PropTypes.string
    })
  ),
  unstyled: PropTypes.bool
};

export default List;
