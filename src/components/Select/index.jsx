import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon';
import arrowDownIcon from '../../assets/icons/fa/chevron-down.svg';

import './style.scss';

class Select extends PureComponent {
  render() {
    const { className, children, ...props } = this.props;

    return (
      <div className={classnames('Van-Select', className)} {...props}>
        <select>{children}</select>
        <Icon source={arrowDownIcon} />
      </div>
    );
  }
}

Select.defaultProps = {
  className: '',
  children: ''
};

Select.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Select;
