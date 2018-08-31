// @flow
import React, { Fragment } from 'react';
import Base from '../Base';
import { media, Container, Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';

export type Props = {
  images?: array,
  flipped?: boolean,
};

const StyledContentBlock = Base.withComponent('div').extend`
  ${media.desktop`
    min-height: 540px;
    position: relative;
    display: flex;
    align-items: center;
  `}

  /* one image */
  .content-block--image-wrapper:first-child:nth-last-child(1) {
    ${media.desktop`
      height: 540px;
    `}
  }

  /* two images */
  .content-block--image-wrapper:first-child:nth-last-child(2),
  .content-block--image-wrapper:first-child:nth-last-child(2) ~ .content-block--image-wrapper {
    &:nth-child(1) {
      margin-top: -50px;
      width: 100%;
      padding-right: 50px;
      position: relative;
      z-index: 2;
      order: 2;

      ${media.desktop`
        margin-top: -80px;
        width: 100%;
        height: 100%;
        object-fit: cover;
      `}
    }

    &:nth-child(2) {
      align-self: flex-end;
      width: 50%;
      height: auto;
      object-fit: cover;
      order: 1;

      ${media.desktop`
        width: 200px;
        height: 200px;
        object-fit: cover;
      `}
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

    ${media.desktop`
      margin-bottom: 0;
      position: absolute;
      ${props => props.flipped ? 'right: 50%' : 'left: 50%'};
      width: 50%;
    `}
  }

  .content-block--image {
    height: 100%;
    width: 100%;
    max-width: 100%;
    object-fit: cover;

    ${media.desktop`
      width: auto;
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

const ContentBlock = ({
  images,
  flipped,
  children,
  ...props
}: Props) => {
  const colAttrs = flipped ? {
    lg: 5,
    lgOffset: 7,
  } : {
    lg: 5,
  };

  const renderContent = (images) => {
    if (images.length == 2) {
      return (
        <StyledContainer>
          <StyledRow>
            <div className="content-block--images-container">
              {images.map(({ src, ...props, }) => (
                <div className="content-block--image-wrapper">
                  <img
                    className="content-block--image"
                    src={src}
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
    }

    // Single image
    return (
      <Fragment>
        <div className="content-block--images-container">
          {images.map(({ src, key, ...props, }) => (
            <div className="content-block--image-wrapper" key={key}>
              <img
                className="content-block--image"
                src={src}
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
    )
  };

  return (
    <StyledContentBlock flipped={flipped}>
      {renderContent(images)}
    </StyledContentBlock>
  );
};

ContentBlock.defaultProps = {
  flipped: false,
  images: [],
};

export default ContentBlock;
