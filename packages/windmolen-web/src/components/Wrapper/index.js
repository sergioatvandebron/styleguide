// @flow
import React, { type Node } from 'react';
import styled, { ThemeProvider, type Theme } from 'styled-components';
import { injectLayoutBaseCSS, GridThemeProvider } from 'styled-bootstrap-grid';
import { colors, gridTheme } from '../../globals';

injectLayoutBaseCSS();

type WindmolenTheme = Theme & {
  color: string,
  backgroundColor: string
};

type WrapperProps = {
  theme: WindmolenTheme,
  children?: Node
};

// themes
const primary = {
  color: colors.warmGray,
  backgroundColor: colors.white,
};

const StyledContainer = styled.div`
  font-family: "Proxima Nova";
  color: ${props => props.theme.color};
  fill: ${props => props.theme.color};
  background-color: ${props => props.theme.backgroundColor};

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-size-adjust: 100%;
  text-rendering: optimizeLegibility;
`;

const Wrapper = (props: WrapperProps) => (
  <ThemeProvider theme={props.theme || 'primary'}>
    <GridThemeProvider gridTheme={gridTheme}>
      <StyledContainer>
        {props.children}
      </StyledContainer>
    </GridThemeProvider>
  </ThemeProvider>
);

Wrapper.defaultProps = {
  theme: primary
};

export default Wrapper;
