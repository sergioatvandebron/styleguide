// @flow
import type { Props } from './';
import styled from 'styled-components';
import { colors } from '../../globals';
import Base from '../Base';
import Icon from '../Icon';
import Span from '../Span';

const isPrimary = (props) => props.type === 'primary';

// Background-color property for the different kinds of buttons
const buttonBackgroundColor = (props: Props, onHover: boolean = false) => {
  if (props.asTextButton) {
    return 'transparent';
  }

  if (isPrimary(props)) {
    return onHover ? colors.charcoalGrayHover : colors.charcoalGray;
  }

  // secondary, non-text button
  return colors.white;
};

const buttonColor = (props: Props, onHover: boolean = false) => {
  if (props.asTextButton) {
    return onHover ? colors.warmGrayHover : colors.warmGray;
  }

  if (isPrimary(props)) {
    return colors.white;
  }

  // secondary, non-text button
  return onHover ? colors.bermudaGray : colors.charcoalGray;
};

export const ButtonText = Span.extend`
  font-size: 16px;
  font-weight: semibold;
  line-height: 2;
  margin-right: ${props => props.withIcon ? '25px' : '50px'};
  background-color: inherit;
  color: inherit;
  line-height: inherit;
`;

export const StyledButton = Base.withComponent('button').extend`
  background-color: ${props => buttonBackgroundColor(props)};
  border: 0;
  color: ${props => buttonColor(props)};
  fill: ${props => buttonColor(props)};
  padding: ${props => props.small ? '4px 15px' : '9px 20px'};
  line-height: 1.6;
  text-decoration: ${props => props.asTextButton ? 'underline' : 'none'};

  &:hover {
    background-color: ${props => buttonBackgroundColor(props, true)};
    color: ${props => buttonColor(props, true)}
    fill: ${props => buttonColor(props, true)};
  }
`;

export const StyledIcon = styled(Icon)`
  background-color: inherit;
  display: ${props => props.asTextButton ? 'none' : 'inline-block'};
  fill: inherit;
  margin-top: 2px;
  margin-right: ${props => props.withIcon ? '15px' : 0};
`;
