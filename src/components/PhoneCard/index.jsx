import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class PhoneCard extends PureComponent {
  getClass(className) {
    let classes = ['Van-PhoneCard'];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    classes.push(className);

    return classes.join(' ').trim();
  }

  render() {
    const {
      className,
      ...props
    } = this.props;

    return (
      <div className={this.getClass()} {...props}>
        <span className="Van-PhoneCard-number">
          <i className="fa fa-phone" />
          {this.props.number}
        </span>
        <span className="Van-PhoneCard-description">{this.props.description}</span>
      </div>
    );
  }
}

PhoneCard.propTypes = {
  className: PropTypes.string,
  number: PropTypes.string,
  description: PropTypes.string
};

export default PhoneCard;
