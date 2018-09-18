// @flow
import styled from 'styled-components';
import List, { StyledIcon } from '../List';
import { StyledTab } from '../Tab';
import { colors } from '../../globals';

const VerticalTabs = styled(List)`
  box-shadow: 0 0 5px 0 rgba(51, 61, 71, 0.12);
  display: block;

  ${StyledTab} {
    border-bottom: 1px solid ${colors.gallery};
    padding: 10px 10px 15px 55px;

    &:last-child {
      border-bottom: 0;
    }

    ${StyledIcon} {
      left: 13px;
    }

    &:hover {
      background-color: ${colors.alabaster};
    }
  }
`;

export default VerticalTabs;
