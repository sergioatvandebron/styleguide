import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Heading extends PureComponent {
  getClass(className) {
    let classes = ['Van-Heading'];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    classes.push(className);

    return classes.join(' ');
  }

  getMarkup(props) {
    let markup = <h1 className={this.getClass('Van-Heading--h1')} {...props}>{this.props.children}</h1>;

    if (this.props.size === 'h2') {
      markup = <h2 className={this.getClass('Van-Heading--h2')} {...props}>{this.props.children}</h2>;
    } else if (this.props.size === 'h3') {
      markup = <h3 className={this.getClass('Van-Heading--h3')} {...props}>{this.props.children}</h3>;
    } else if (this.props.size === 'h4') {
      markup = <h4 className={this.getClass('Van-Heading--h4')} {...props}>{this.props.children}</h4>;
    }

    return markup;
  }

  render() {
    const {
      className,
      ...props
    } = this.props;

    return this.getMarkup(props);
  }
}

Heading.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string
};

export default Heading;
