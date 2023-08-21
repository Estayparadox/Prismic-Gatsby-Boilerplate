import { styled } from 'styled-components';

import { Color, Spacer } from '../../constants/constants';

export const Footer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  margin: ${Spacer.NONE} ${Spacer.XL} ${Spacer.NONE};
`;

export const Link = styled.a`
  margin-left: ${Spacer.XS};
  text-decoration: underline;
  color: ${Color.WHITE};
`;
