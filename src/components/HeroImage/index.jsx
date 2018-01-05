import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

class HeroImage extends PureComponent {
  render() {
    const {
      className,
      image,
      ...props
    } = this.props;

    return (
      <div
        className={classnames('Van-HeroImage', className)}
        {...props}
      >
        <div
          className="Van-HeroImage-content"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      </div>
    );
  }
}

HeroImage.defaultProps = {
  className: '',
  image: '',
};

HeroImage.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
};

export default HeroImage;
