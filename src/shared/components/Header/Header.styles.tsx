import { styled } from 'styled-components';

import { Color, FontSize, Spacer } from '../../constants';

export const Header = styled.div`
  background-color: ${Color.BACKGROUND};
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  height: 100px;
  width: 100px;
  margin-top: ${Spacer.L};
`;

export const Title = styled.h1`
  color: ${Color.PRIMARY};
  font-size: ${FontSize.XXXL};
  margin: ${Spacer.L} ${Spacer.NONE} ${Spacer.XL} ${Spacer.NONE};
  border-bottom: 2px solid;
  padding-bottom: ${Spacer.M};
  font-weight: 900;
`;
