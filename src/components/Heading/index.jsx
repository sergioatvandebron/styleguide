import React, { PureComponent } from 'react';
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

  getMarkup() {
    let markup = <h1 className={this.getClass('Van-Heading--h1')}>{this.props.children}</h1>;

    if (this.props.size === 'h2') {
      markup = <h2 className={this.getClass('Van-Heading--h2')}>{this.props.children}</h2>;
    } else if (this.props.size === 'h3') {
      markup = <h3 className={this.getClass('Van-Heading--h3')}>{this.props.children}</h3>;
    } else if (this.props.size === 'h4') {
      markup = <h4 className={this.getClass('Van-Heading--h4')}>{this.props.children}</h4>;
    }

    return markup;
  }

  render() {
    return this.getMarkup();
  }
}

export default Heading;
