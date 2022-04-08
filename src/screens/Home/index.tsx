import React, {useEffect} from 'react'
import { FlatList, Image } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Post } from '../../interfaces'
import api from '../../services'
import * as S from './styles'
import { RootStackParamList } from '../../routes'
import { useQuery } from 'react-query'
import mockNba from '../../mock/index.json'
import {CardNba} from '../../shared'

interface PostProps {
  post: any
}

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export const Home = () => {
  const navigation = useNavigation<homeScreenProp>();

  const { data } = useQuery('posts', async () => {
    try {
      
      // const resp = await api.get<Post[]>('https://api.github.com/users/otaciliogomes/repos')
      const resp = await api.get<Post[]>('https://jsonplaceholder.typicode.com/todos')
      return resp.data
    } catch (error) {
      alert('Error !')
      console.log(error)
    }
  })

  // useEffect(() => {
  //   async function name() {
  //     const resp = await api.get<Post[]>('/https://api-nba-v1.p.rapidapi.com/teams')
  //     console.log(resp)
  //   }
  //   name()
  // },[])

  const Post = ({ post }: PostProps) => (
    <S.PostContainer>
      <S.Text>{post.id}</S.Text>
      <S.Text>{post.name}fdf</S.Text>
      <S.Text>{post.created_at}</S.Text>
    </S.PostContainer>
  )

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>Post de hoje{data?.length}</S.Title>
      </S.TitleContainer>
      <S.Button onPress={() => navigation.navigate('NewPost')}>
        <S.Text>+</S.Text>
      </S.Button>
      <FlatList
        data={mockNba.response}
        renderItem={({ item }) => <CardNba item={item} />}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator
        scrollEnabled
        horizontal
      />
      {/* {data?.map(item => <Post post={item} />)} */}
    </S.Container>
  )
}

