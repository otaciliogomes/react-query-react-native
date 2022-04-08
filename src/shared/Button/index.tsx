import React from 'react'

import * as S from './styles'
interface ButtonProps {
  title: string
  type: 'contained' | 'outlined' | 'translucent'
  height?: number
  width?: number | string
  disabled?: boolean
  loading?: boolean
  fontSize?: number | string
  padding?: number | string
  onPress(): void
}

export const Button = (props: ButtonProps) => {
  return (
    <S.Container {...props}>
      {!props.loading && (
        <S.CustomText padding={props.padding} fontSize={props.fontSize} type={props.type}>{props.title}</S.CustomText>
      )}
    </S.Container>
  )
}
