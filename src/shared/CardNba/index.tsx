import React from 'react'
import { Player, TeamsLeague } from 'src/interfaces'
import * as S from './styles'

type Props = {
    item: TeamsLeague
    setPlayers: (player: TeamsLeague) => void
}

export const CardNba = ({ item, setPlayers }: Props): JSX.Element => {
    return (
        <S.Container onPress={() => setPlayers(item)}>
            <S.Image 
                source={{uri: item.logo}}
            />
            <S.Title>{item.name}</S.Title>
        </S.Container>
    )
}

