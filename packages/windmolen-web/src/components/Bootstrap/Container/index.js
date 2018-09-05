import React from 'react';
import styled from 'styled-components';
import { px } from '../../../utils';
import { gridTheme } from '../../../globals';
import { media, Container as BootstrapContainer } from 'styled-bootstrap-grid';

const CONTAINER_SMALL = 760 + (gridTheme.container.padding * 2);
const CONTAINER_MEDIUM = 960 + (gridTheme.container.padding * 2);

const Container = styled(BootstrapContainer)`
  ${props => props.small && `max-width: ${px(CONTAINER_SMALL)};`}
  ${props => props.medium && `max-width: ${px(CONTAINER_MEDIUM)};`}

  ${props => (!props.small && !props.medium) && media.giant`
    max-width: 1200px;
  `}
  }
`;

export default Container;
