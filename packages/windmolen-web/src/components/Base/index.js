// @flow
import styled from 'styled-components';
import { largeUp } from '../utils';

export type BaseProps = {
  withShadow?: boolean
};

const Base = styled.div`
  background-color: inherit;
  box-shadow: ${props => props.withShadow ? '-22px 16px 22px 0 rgba(0, 0, 0, 0.18)' : 'unset'};
  box-sizing: border-box;
  color: inherit;
  fill: inherit;
  font-family: inherit;
  font-size: 20px;
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-height: 2;

  ${props => props.withShadow ? largeUp('box-shadow: -40px 28px 40px 0 rgba(0, 0, 0, 0.18)') : ''}
`;

export default Base;
