import styled from 'styled-components';
import Base from '../Base';
import { colors } from '../../globals';
import { mediumUp } from '../../utils';

const H1 = styled(Base.withComponent('h1')).attrs({
  fontSize: 'h1',
})`
  color: ${colors.charcoalGray};
  font-weight: 800;
  margin: 0 0 10px;

  ${mediumUp('margin: 0 0 50px;')}
`;

const H2 = styled(Base.withComponent('h2')).attrs({
  fontSize: 'h2',
})`
  color: ${colors.charcoalGray};
  font-weight: 800;
  margin: 0 0 10px

  ${mediumUp('margin: 0 0 20px;')}
`;

const H3 = styled(Base.withComponent('h3')).attrs({
  fontSize: 'h3',
})`
  color: ${colors.charcoalGray};
  font-weight: 800;
  margin: 0 0 10px

  ${mediumUp('margin: 0 0 20px;')}
`;

const H4 = styled(Base.withComponent('h4')).attrs({
  fontSize: 'h4',
})`
  color: ${colors.charcoalGray};
  font-weight: 800;
  margin: 0 0 10px
`;

const H5 = styled(Base.withComponent('h5')).attrs({
  fontSize: 'h5',
})`
  color: ${colors.charcoalGray};
  font-weight: 700;
  margin: 0 0 10px

  ${mediumUp('margin: 0 0 20px;')}
`;

export { H1, H2, H3, H4, H5 };
