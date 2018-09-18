// @flow
import React, { Fragment, type Node } from 'react';
import classNames from 'classnames';
import { media } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import Container from '../Bootstrap/Container';
import Row from '../Bootstrap/Row';
import Col from '../Bootstrap/Col';
import Animate from '../Animate';
import Image from '../Image';

import Base from '../Base';

export type Props = {
  /** An array of the images being shown. */
  images?: array,

  /** When specified, the content/image container will be flipped. */
  flipped?: boolean,

  /** When specified, the images will flip sides. */
  imagesFlipped?: boolean,

  /** Specifiy a size (will be applied to very specific images). */
  size?: string,

  /** The content itself. */
  children?: Node
};

const StyledImage = styled(Image)``;

const StyledContentBlock = styled(Base.withComponent('div'))`
  ${media.desktop`
    min-height: 510px;
    position: relative;
    display: flex;
    align-items: center;
  `}

  /* one image */
  .content-block--image-wrapper:first-child:nth-last-child(1) {
    ${media.desktop`
      height: 510px;
    `}

    .content-block--image {
      height: 100%;
      width: 100%;
      max-width: 100%;
      object-fit: cover;

      ${media.desktop`
        width: auto;
        float: ${props => props.flipped ? 'right' : 'left'};
      `}
    }
  }

  /* two images */
  .content-block--image-wrapper:first-child:nth-last-child(2),
  .content-block--image-wrapper:first-child:nth-last-child(2) ~ .content-block--image-wrapper {
    &:nth-child(1) {
      margin-top: -50px;
      width: 100%;
      position: relative;
      z-index: 2;
      order: 2;
      ${props => props.imagesFlipped ? `
        padding-left: 60px;
      ` : `
        padding-right: 60px;
      `}

      ${media.desktop`
        margin-top: -80px;
        width: 100%;
        height: 100%;
        object-fit: cover;
      `}
    }

    &:nth-child(2) {
      align-self: ${props => props.imagesFlipped ? 'flex-start' : 'flex-end'};
      height: auto;
      object-fit: cover;
      order: 1;
      ${media.desktop`
        object-fit: cover;
      `}

      &.size--small {
        width: 110px;
        ${media.desktop`
          width: 200px;
        `}
      }

      &.size--large {
        width: 170px;
        ${media.desktop`
          width: 300px;
        `}
      }

    }
  }

  .content-block--images-container,
  .content-block--image-wrapper {
    &:before,
    &:after {
      content: '';
      display: table;
      width: 100%;
      clear: both;
    }
  }

  .content-block--image-wrapper {
    &:first-child img {
      box-shadow: -20px 14px 20px 0 rgba(0, 0, 0, 0.18);
      ${media.desktop`
        box-shadow: -40px 28px 40px 0 rgba(0, 0, 0, 0.18);
      `}
    }
  }

  .content-block--images-container {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    width: 100%;

    ${media.desktop`
      margin-bottom: 0;
      position: absolute;
      ${props => props.flipped ? 'right: 50%' : 'left: 50%'};
      width: 50%;
    `}
  }
`;

const StyledContainer = styled(Container)`
  position: relative;
`;

const StyledRow = styled(Row)`
  ${media.desktop`
    display: flex;
    align-items: center;
  `}
`;

const ContentBlock = ({ children, ...props }: Props) => {
  const colAttrs = props.flipped ? {
    lg: 5,
    lgOffset: 7,
  } : {
    lg: 5,
  };

  const renderContent = (images) => {
    switch (images.length) {
      case 2:
        return (
          <StyledContainer>
            <StyledRow>
              <div className="content-block--images-container">
                {images.map(({ key, size, ...props, }) => (
                  <div className={classNames('content-block--image-wrapper', {
                    [`size--${size}`]: size,
                  })}
                  key={key}
                >
                    <StyledImage
                      className="content-block--image"
                      {...props}
                    />
                  </div>
                ))}
              </div>
              <Col className="content-block--content-wrapper" {...colAttrs}>
                {children}
              </Col>
            </StyledRow>
          </StyledContainer>
        );

      case 1:
      default:
        return (
          <Fragment>
            <div className="content-block--images-container">
              {images.map(({ key, ...props, }) => (
                <div className="content-block--image-wrapper" key={key}>
                  <StyledImage
                    className="content-block--image"
                    {...props}
                  />
                </div>
              ))}
            </div>
            <StyledContainer>
              <Row>
                <Col className="content-block--content-wrapper" {...colAttrs}>
                  {children}
                </Col>
              </Row>
            </StyledContainer>
          </Fragment>
        );
    }
  };

  // Set default values for all the images.
  const alteredImages = props.images.map(attrs => ({
    size: 'large',
    ...attrs,
  }))

  return (
    <Animate.Block>
      <StyledContentBlock {...props}>
        {renderContent(alteredImages)}
      </StyledContentBlock>
    </Animate.Block>
  );
};

ContentBlock.defaultProps = {
  flipped: false,
  images: [],
};

export default ContentBlock;
