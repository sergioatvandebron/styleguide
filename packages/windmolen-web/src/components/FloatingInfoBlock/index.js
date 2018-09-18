import React, { type Node } from 'react';
import styled from 'styled-components';
import { colors } from '../../globals';
import Icon from '../Icon';

type Props = {
  /** Props to be passed to the <Icon /> component. */
  iconProps?: object,

  /** The background to be specified for the icon. */
  iconBackgroundColor?: string,

  /** The children itself. */
  children?: Node,
};

const StyledIconContainer = styled.div`
  background: ${props => props.backgroundColor};
  width: 65px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const StyledFloatingInfoBlock = styled.div`
  box-shadow: -2rem 1.4rem 2rem 0 rgba(0, 0, 0, 0.18);
  display: inline-flex;
  height: 65px;
`;

const StyledInnerContainer = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const FloatingInfoBlock = ({ children, iconProps, ...props }: Props) => (
  <StyledFloatingInfoBlock>
    {iconProps.name && (
      <StyledIconContainer backgroundColor={props.iconBackgroundColor}>
        <Icon
          variant={1}
          fontSize="40px"
          {...iconProps}
        />
      </StyledIconContainer>
    )}
    <StyledInnerContainer>
      {children}
    </StyledInnerContainer>
  </StyledFloatingInfoBlock>
);

FloatingInfoBlock.defaultProps = {
  iconProps: null,
  iconBackgroundColor: colors.charcoalGray,
}

export default FloatingInfoBlock;
