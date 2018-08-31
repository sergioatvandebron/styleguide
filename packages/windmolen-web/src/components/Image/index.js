// @flow
import React from 'react';
import Base from '../Base';
import { media } from 'styled-bootstrap-grid';
import styled from 'styled-components';

type Props = {
  /** Will make the image not overflow its parent. */
  responsive?: boolean,
};

const StyledImage = styled(Base.withComponent('img'))`
  ${props => props.responsive ? 'max-width: 100%; height: auto;' : ''}
`;

const Image = (props: Props) => {
  return <StyledImage {...props} />
};

Image.defaultProps = {
  responsive: true,
};

export default Image;
