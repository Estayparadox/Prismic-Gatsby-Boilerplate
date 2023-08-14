import { styled } from 'styled-components';

import { Color, Spacer } from '../../constants/constants';

export const Footer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  margin: ${Spacer.HUGE} ${Spacer.NONE} ${Spacer.XL} ${Spacer.NONE};
`;

export const Link = styled.a`
  margin-left: ${Spacer.S};
  color: ${Color.GOLD};
  text-decoration: underline;
`;
