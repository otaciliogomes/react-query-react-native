import React from 'react'
import { FlatList } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Post } from '../../interfaces'
import api from '../../services'
import * as S from './styles'
import { RootStackParamList } from '../../routes'
import { useQuery } from 'react-query'

interface PostProps {
  post: any
}

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export const Home = () => {
  const navigation = useNavigation<homeScreenProp>();

  const { data } = useQuery('posts', async () => {
    try {
      const resp = await api.get<Post[]>('/categories')
      console.log(resp.data)
      return resp.data
    } catch (error) {
      alert('Error !')
      console.log(error)
    }
  })

  const Post = ({ post }: PostProps) => (
    <S.PostContainer>
      <S.Text>{post.id}</S.Text>
      <S.Text>{post.name}</S.Text>
      <S.Text>{post.created_at}</S.Text>
    </S.PostContainer>
  )

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>Post de hoje</S.Title>
      </S.TitleContainer>
      <S.Button onPress={() => navigation.navigate('NewPost')}>
        <S.Text>+</S.Text>
      </S.Button>
      <FlatList
        data={data}
        renderItem={({ item }) => <Post post={item} />}
        keyExtractor={item => item.id}
      />
    </S.Container>
  )
}

