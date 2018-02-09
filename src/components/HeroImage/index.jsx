import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

class HeroImage extends PureComponent {
  render() {
    const { className, image, children, ...props } = this.props;

    return (
      <div className={classnames('Van-HeroImage', className)} {...props}>
        <div
          className="Van-HeroImage-image"
          style={{
            backgroundImage: `url(${image})`
          }}
        />
        {children ? <div className="Van-HeroImage-content">{children}</div> : null}
      </div>
    );
  }
}

HeroImage.defaultProps = {
  className: '',
  image: '',
  children: undefined
};

HeroImage.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.node
};

export default HeroImage;
