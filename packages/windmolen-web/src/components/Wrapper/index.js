// @flow
import React, { type Node } from 'react';
import styled, { ThemeProvider, type Theme } from 'styled-components';
import { colors } from '../../globals';

type WindmolenTheme = Theme & {
  color: string,
  backgroundColor: string
};

type WrapperProps = {
  theme: WindmolenTheme,
  children?: Node
};

const primary = {
  color: colors.warmGray,
  backgroundColor: colors.white
};

const StyledContainer = styled.div`
  font-family: "Proxima Nova";
  color: ${props => props.theme.color};
  fill: ${props => props.theme.color};
  background-color: ${props => props.theme.backgroundColor};
`;

const Wrapper = (props: WrapperProps) => (
  <ThemeProvider theme={props.theme}>
    <StyledContainer>
      {props.children}
    </StyledContainer>
  </ThemeProvider>
);

Wrapper.defaultProps = {
  theme: primary
};

export default Wrapper;

//
{/* <Wrapper theme={jsdf}>
  <Block>
    <Button>something</Button>
    <Button theme="dark23">something</Button>
  </Block>
</Wrapper>  */}
