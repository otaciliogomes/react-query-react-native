import React from 'react'
import * as S from './styles'

export const Slide = ({ img }) =>
  <S.Container>
    <S.Image
      style={{ width: 400, height: 400 }}
      source={{ uri: img }}
    />
  </S.Container>



