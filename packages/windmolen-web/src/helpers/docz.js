import React from 'react';
import styled from 'styled-components';
import Wrapper from '../components/Wrapper';
import { colors } from '../globals';

// to be used with docz' <Playground>
export const DarkWrapper = (props) => (
  <Wrapper theme={{ backgroundColor: colors.charcoalGray, color: 'blue' }}>
    {props.children}
  </Wrapper>
);

// export const DarkWrapper = styled(Wrapper).attrs({
//   theme: {
//     color: 'red',
//     backgroundColor: 'yellow'
//   }
// });
