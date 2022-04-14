import React from 'react'
import { Player } from 'src/interfaces'
import * as S from './styles'

type Props = {
    item: Player
    color: string
}

export const CardPlayer = ({ item, color }: Props): JSX.Element => {
    return (
        <S.Container>
            <S.Content color={color}>
                <S.Image source={require('../../assets/trae_young.png')}/>
                <S.Title>{item.name}</S.Title>
                <S.Text><S.Title>Posição: </S.Title>{item?.position}</S.Text>
            </S.Content>
        </S.Container>
    )
}