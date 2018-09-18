// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';
import List from '../List';
import Span from '../Span';
import Bold from '../Bold';
import { colors } from '../../globals';

type TabProps = {
  title?: Node,
  children?: Node,
};

export const StyledTab = styled(List.Item)`
  background-color: ${props => props.active ? colors.alabaster : colors.white};
  border-left: 5px solid ${props => props.active ? colors.charcoalGray : colors.transparent};
  cursor: pointer;
  display: block;
`;

const Tab = ({ title, children, ...props }: TabProps) => (
  <StyledTab {...props}>
    {title && <Bold fontSize="body-small">{title}</Bold>}
    {title && children && <br />}
    {children && <Span fontSize="body-xsmall">{children}</Span>}
  </StyledTab>
);

export default Tab;

