import * as React from "react"

import * as S from "./Header.styles"

export const Header = ({ title, logo }: { title: string; logo?: any }) => {
  if (!title) {
    return null
  }

  return (
    <S.Header>
      <S.Logo href={logo?.url} src={logo?.url} alt={logo?.alt} />
      <S.Title>{title}</S.Title>
    </S.Header>
  )
}
