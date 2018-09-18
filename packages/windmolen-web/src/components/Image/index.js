// @flow
import React from 'react';
import Base from '../Base';
import { media } from 'styled-bootstrap-grid';
import styled from 'styled-components';

type Props = {
  /** Will make the image not overflow its parent. */
  responsive?: boolean,

  /** Specify a specific aspect ratio for the image */
  aspectRatio?: '16:9'| '4:3' | '1:1',
};

const StyledImage = styled(Base.withComponent('img'))`
  ${props => props.responsive && `
    max-width: 100%;
    height: auto;
  `}
`;

const StyledImageContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: ${props => props.paddingBottom}%;
  position: relative;

  ${StyledImage} {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Image = ({ aspectRatio, ...props }: Props) => {
  if (aspectRatio) {
    const [width, height] = aspectRatio.split(':');
    const paddingBottom = (height / width) * 100;
    return (
      <StyledImageContainer paddingBottom={paddingBottom}>
        <StyledImage {...props} />
      </StyledImageContainer>
    );
  }

  return (
    <StyledImage {...props} />
  );
};

Image.defaultProps = {
  responsive: true,
  aspectRatio: null,
};

export default Image;
