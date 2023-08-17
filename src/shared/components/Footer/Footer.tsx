import * as React from 'react';

import * as S from './Footer.styles';

export const Footer = () => (
  <S.Footer>
    © {new Date().getFullYear()} &middot; Built by
    <S.Link href='https://www.buymeacoffee.com/estayparadox'>
      Joseph Pereniguez
    </S.Link>
  </S.Footer>
);
