import React from 'react'
import { Player } from 'src/interfaces'
import * as S from './styles'

type Props = {
    item: Player
    color: string
}

export const CardPlayer = ({ item, color }: Props): JSX.Element => {
    const defaultImage = '../../assets/players/jayson_tatum.png'


    return (
        <S.Container>
            <S.Content color={color}>
                <S.Image href={`../../assets/players/${item.image}.png` || defaultImage} />
                <S.Title>{item.name}</S.Title>
                <S.Text><S.Title>Posição: </S.Title>{item?.position}</S.Text>
            </S.Content>
        </S.Container>
    )
}