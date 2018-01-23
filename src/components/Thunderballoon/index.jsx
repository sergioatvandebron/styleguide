import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Thunder from '../Thunder';

/*
 * TODO: not fully finished for all cases, fix is needed for some combinations.
 *       If we need this next for a case where it does not look good it would be
 *       desired to wash this pig for once and for all+
 * (+http://www.woorden.org/spreekwoord.php?woord=dat%20varkentje%20zullen%20we%20even%20wassen)
 *
 * This generates a Vandebron style balloon with an arrow pointing somewhere.
 * The shape of the arrow is determined by which side of the balloon it is on
 * (it always points away from the balloon) and by the arrow prop which will
 * distinguish between the possible options for the arrow head (for example if
 * the arrow is left side, the arrow head can either be on the top or on the
 * bottom)
 *
 * Based on the arrow properties, appropriate css classes are set which perform
 * the right transformations on the arrow head and position it.
 *
 * Possible props combinations of side and arrow:
 *
 * +--------+--------+
 * | side   | arrow  |
 * +--------+--------+----+
 * | bottom | right  | .. |
 * |        |        | .v |
 * +--------+--------+----+
 * | right  | bottom | .. |
 * |        |        | .> |
 * +--------+--------+----+
 * | top    | right  | .^ |
 * |        |        | .. |
 * +--------+--------+----+
 * | right  | top    | .> |
 * |        |        | .. |
 * +--------+--------+----+
 * | bottom | left   | .. |
 * |        |        | v. |
 * +--------+--------+----+
 * | left   | bottom | .. |
 * |        |        | <. |
 * +--------+--------+----+
 * | top    | left   | ^. |
 * |        |        | .. |
 * +--------+--------+----+
 * | left   | top    | <. |
 * |        |        | .. |
 * +--------+--------+----+
 *
 * Thunderballoon receives  side   = ['top', 'bottom', 'left', 'right']
 *                          arrow  = ['top', 'bottom', 'left', 'right']
 *                          corner = ['top', 'bottom', 'left', 'right', 'middle']
 * */

const Thunderballoon = props => {
  const thunderballoonClasses = classNames('thunderballoon', props.classValue);
  const thunderPositionClasses = classNames(`${props.side}-side`, `${props.corner}-corner`);

  return (
    <div className={thunderballoonClasses}>
      <Thunder side={props.side} arrow={props.arrow} positionClasses={thunderPositionClasses} />
      {props.children}
    </div>
  );
};

Thunderballoon.propTypes = {
  classValue: PropTypes.string.isRequired,
  side: PropTypes.string.isRequired,
  corner: PropTypes.string.isRequired,
  arrow: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Thunderballoon;
