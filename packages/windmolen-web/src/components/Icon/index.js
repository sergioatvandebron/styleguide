// @flow
import type { Node } from 'react';
import React from 'react';
import styled from 'styled-components';
import { media } from 'styled-bootstrap-grid';
import Span from '../Span';
import SpritesheetSVG from '../../assets/icons/sprite-sheet.svg';
import SpritesheetPNG from '../../assets/icons/sprite-sheet.png';
import { colors } from '../../globals';

type Props = {
  /** The name of the icon. */
  name: string,

  /** The font-size for the icon. */
  fontSize: string,

  /**
   * The desktop font-size for the icon. A fallback is being done to
   * 'font-size' when this prop is not specified.
   */
  desktopFontSize: string,

  /** The icon color (variant). */
  variant?: number,

  /** Additional classes. */
  className?: string,
};

const spritesheet = {};

// Define the amount of rows (1-index based).
spritesheet.rows = 5;

// Define the icons from left to right in the sheet using a human-readable name.
spritesheet.names = [
  'facebook',
  'twitter',
  'youtube',
  'instagram',
  'arrow-left',
  'arrow-right',
  'search',
  'thumb-up',
  'app',
  'laadpas',
  'laadpaal',
  'slim-laden',
  'solar-panel',
  'windmill',
  'bio',
  'send',
  'sun',
  'user',
  'phone',
  'app--left',
  'laadpas--left',
  'laadpaal--left',
  'slim-laden--left',
  'leaf',
  'windmill--thick',
  'caret-right',
  'star',
  'play',
  'pause',
  'enter-fullscreen',
  'exit-fullscreen',
  'volume-muted',
  'volume-low',
  'volume-mid',
  'volume-low',
  'wind-indication',
  'star-outline--thick',
  'vdb-logo',
  'wallet--thick',
  'meter--thick',
  'switch--thick',
  'solarpanel--thick',
  'thunderstrike--thick',
  'user--thick',
  'paper--thick',
  'label--thick',
  'bell--thick',
  'lamp--thick',
  'meter-switch--thick',
  'laadpas--thick',
  'laadpaal--thick',
  'app--thick',
  'thunderstrike',
  'wallet',
  'repair',
  'battery',
  'laptop',
  'calendar',
  'notes',
  'phone-thin',
  'gas',
  'apartment',
  'house--tussenwoning',
  'house--hoekwoning',
  'house--2-onder-1-kap',
  'house--vrijstaand',
  'people--one',
  'people--two',
  'people--three',
  'people--four',
  'people--five',
  'electricity-gas',
  'apartment--thick',
  'house--tussenwoning--thick',
  'house--hoekwoning--thick',
  'house--2-onder-1-kap--thick',
  'house--vrijstaand--thick',
  'people--one--thick',
  'people--two--thick',
  'people--three--thick',
  'people--four--thick',
  'people--five--thick',
  'electricity-gas--thick',
  'radio',
  'radio--checked',
  'checkbox',
  'checkbox--checked',
  'checkmark',
  'close',
];

const StyledSpan = styled(Span).attrs({
  className: props => props.className + ' windmolen-spritesheet'
})`
  background-image: url('${SpritesheetPNG}');
  background-image: url('${SpritesheetSVG}');
  background-position: -${props => spritesheet.names.indexOf(props.name)}em -${props => props.variant}em;
  background-repeat: no-repeat;
  background-color: ${colors.transparent};
  background-size: ${spritesheet.names.length}em ${spritesheet.rows}em;
  display: inline-block;
  height: 1em;
  width: 1em;
  vertical-align: middle;

  &&& {
    font-size: ${props => props.fontSize};
    line-height: 1;
    ${media.desktop`
      ${props => props.desktopFontSize !== null && `font-size: ${props.desktopFontSize};`}
    `}
  }
}`;

const Icon = (props: Props): Node => (
  <StyledSpan {...props} />
);

Icon.defaultProps = {
  desktopFontSize: null,
  fontSize: '150%',
  variant: 0,
  className: ''
};

export {
  spritesheet,
};

export default Icon;
