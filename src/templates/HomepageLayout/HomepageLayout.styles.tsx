import { styled } from 'styled-components';

import { Color, Spacer } from '../../shared/constants/constants';

export const Layout = styled.div`
  background-color: ${Color.BACKGROUND};
`;

export const Container = styled.div`
  padding: ${Spacer.S};
`;

export const GlobalWrapper = styled.div`
  color: ${Color.PRIMARY};
  border: 4px solid;
  padding: ${Spacer.S};
`;
