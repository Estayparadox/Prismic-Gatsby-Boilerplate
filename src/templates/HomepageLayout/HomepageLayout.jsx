import * as React from 'react';

import { Footer } from '../../shared/components/Footer';
import { Header } from '../../shared/components/Header';

import '../../shared/styles/common.css';
import * as S from './HomepageLayout.styles';

export const HomepageLayout = ({ title, children, logo }) => {
  if (!title) {
    return null;
  }

  return (
    <S.Layout>
      <S.Container>
        <S.GlobalWrapper>
          <Header logo={logo} title={title.toUpperCase()} />
          {children}
          <Footer />
        </S.GlobalWrapper>
      </S.Container>
    </S.Layout>
  );
};
