import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/*
 * This component is used by the ThunderBalloon component to draw the arrow
 * element.
 *
 * Thunder receives side  = ['top', 'bottom', 'left', 'right']
 *                  arrow = ['top', 'bottom', 'left', 'right']
 *
 * See comments in ThunderBalloon component for explanation of the side and arrow
 * props.
* */

function Thunder(props) {
  const { side, arrow, positionClasses } = props;
  const thunderClasses = classNames('thunder', `${side}-side-${arrow}-arrow`, positionClasses);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85 80" className={thunderClasses}>
      <path d="M83.239 56.733l-24.434-18.777c-1.547-1.192-3.805-.087-3.805 1.866v.178h.011l-1.109
        9h-13.022l22.897-42.292c1.808-2.899-.275-6.708-3.703-6.708h-60.074v20h33.916l-22.75
        41.391c-1.799 2.887.275 6.609 3.676 6.609h39.032l1.137 10h.05c.15 1 2.267 2.605 3.761
        1.456l24.417-18.886c1.226-.94 1.226-2.894 0-3.837z" />
    </svg>
  );
}

Thunder.propTypes = {
  side: PropTypes.string.isRequired,
  arrow: PropTypes.string.isRequired,
  positionClasses: PropTypes.string.isRequired
};

export default Thunder;
