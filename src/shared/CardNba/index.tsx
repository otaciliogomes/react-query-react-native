import React from 'react'
import * as S from './styles'

type Props = {
    item: {
        id: number
        name: string
        nickname: string
        code: string
        city: string
        logo: string
    }
}

export const CardNba = ({ item }: Props): JSX.Element => {
    return (
        <S.Container>
            <S.Image 
                source={{uri: item.logo}}
            />
            <S.Title>{item.name}</S.Title>
        </S.Container>
    )
}

