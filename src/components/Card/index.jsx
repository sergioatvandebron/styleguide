import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';
import Divider from '../Divider';

import './style.scss';

class Card extends PureComponent {
  getClass(className) {
    const classes = ['Van-Card'];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    classes.push(className);

    return classes.join(' ').trim();
  }

  render() {
    return (
      <section className="Van-Card">
        <span className="Van-Card-label">Nog 4 beschikbaar</span>

        <div className="u-padding--medium u-padding-top--large">
          <span className="Van-Card-type">
            <span className="fa fa-sun-o" />
            Windenergie
          </span>
          <h1 className="Van-Card-producer">van Arie Noordmeer</h1>
          <div className="o-layout o-layout--space-between u-margin-top--x-small">
            <span className="Van-Card-consumption">Geschat verbruik 2.850 kWh</span>
            <span className="Van-Card-icon fa fa-pencil" />
          </div>

          <Divider>En</Divider>

          <h2 className="Van-Card-subtitle">Aardgas uit Nederland</h2>
          <div className="o-layout o-layout--space-between u-margin-top--x-small">
            <span className="Van-Card-consumption">Geschat verbruik 1.200 m3</span>
            <span className="Van-Card-icon fa fa-pencil" />
          </div>
          <Link href="#" title="Lees meer">Lees meer</Link>
        </div>

        <Divider />

        <div className="o-layout o-layout--direction-column o-layout--middle u-padding-bottom--small">
          <span className="Van-Card-price">
            <span className="Van-Card-price-value">€ 116,90</span> Per maand
          </span>
          <span className="Van-Card-price-description">All in | incl. gas | 3 jaar vast</span>
          <Link href="#" title="Bekijk tLinkrieven">Bekijk tarieven</Link>
        </div>

        <footer className="Van-Card-footer o-layout o-layout--direction-column o-layout--middle u-padding--small">
          <ul className="Van-Card-list">
            <li className="Van-Card-listitem">14 dagen bedenktijd</li>
            <li className="Van-Card-listitem">Wij regelen de overstap</li>
            <li className="Van-Card-listitem">100% lokale energie</li>
          </ul>
        </footer>
      </section>
    );
  }
}

Card.defaultProps = {
  number: {},
  description: {},
  className: '',
};

Card.propTypes = {
  className: PropTypes.string,
  number: PropTypes.string,
  description: PropTypes.string,
};

export default Card;
