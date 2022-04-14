import React, { useEffect, useState } from 'react'
import { FlatList, Image } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Player, Post, TeamsLeague } from '../../interfaces'
import api from '../../services'
import * as S from './styles'
import { RootStackParamList } from '../../routes'
import { useQuery } from 'react-query'
import mockNba from '../../mock/index.json'
import { CardNba, CardPlayer } from '../../shared'

interface PostProps {
  post: any
}

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export const Home = () => {
  const navigation = useNavigation<homeScreenProp>();
  const [players, setPlayers] = useState<Player[]>(mockNba.response[1]?.players as Player[])
  const [colorTeam, setcolorTeam] = useState('#c8102e')

  const handleSetPlayer = (list: TeamsLeague) => {
    setPlayers(list.players)
    setcolorTeam(list.colorTeam)
  }

  return (
    <S.Container>
      <S.Title>NBA</S.Title>
      <FlatList
        data={mockNba.response}
        renderItem={({ item }) => <CardNba item={item} setPlayers={handleSetPlayer}/>}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        scrollEnabled
        horizontal
      />
      <S.Title>PLAYERS</S.Title>
      <FlatList 
        data={players}
        keyExtractor={item => item.name}
        renderItem={({ item }) => <CardPlayer item={item} color={colorTeam} />}
        horizontal
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  )
}

