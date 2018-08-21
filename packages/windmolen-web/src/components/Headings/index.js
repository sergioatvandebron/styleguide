import styled from 'styled-components';
import Base from '../Base';
import { colors } from '../../globals';

const H1 = styled(Base.withComponent('h1')).attrs({
  fontSize: 'h1',
  margin: '0 0 50px'
})`
  color: ${colors.charcoalGray};
  font-weight: 800;
`;

const H2 = styled(Base.withComponent('h2')).attrs({
  fontSize: 'h2',
  margin: '0 0 20px'
})`
  color: ${colors.charcoalGray};
  font-weight: 800;
`;

const H3 = styled(Base.withComponent('h3')).attrs({
  fontSize: 'h3',
  margin: '0 0 20px'
})`
  color: ${colors.charcoalGray};
  font-weight: 800;
`;

const H4 = styled(Base.withComponent('h4')).attrs({
  fontSize: 'h4',
  margin: '0 0 10px'
})`
  color: ${colors.charcoalGray};
  font-weight: 800;
`;

const H5 = styled(Base.withComponent('h5')).attrs({
  fontSize: 'h5',
  margin: '0 0 20px'
})`
  color: ${colors.charcoalGray};
  font-weight: 700;
`;

export { H1, H2, H3, H4, H5 };
