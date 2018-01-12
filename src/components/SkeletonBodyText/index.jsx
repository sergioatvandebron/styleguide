import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

class SkeletonBodyText extends PureComponent {
  render() {
    const { className, lines, ...props } = this.props;
    const textLines = [];

    for (let i = 0; i < lines; i += 1) {
      textLines.push(<div className="Van-SkeletonBodyText-line" key={i} />);
    }

    return (
      <div className={classnames('Van-SkeletonBodyText', className)} {...props}>
        {textLines}
      </div>
    );
  }
}

SkeletonBodyText.defaultProps = {
  className: '',
  lines: 3
};

SkeletonBodyText.propTypes = {
  className: PropTypes.string,
  lines: PropTypes.number
};

export default SkeletonBodyText;
