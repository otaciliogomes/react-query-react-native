import React, { useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import * as S from './styles'
import {RootStackParamList} from '../../routes'
import { Post } from '../../interfaces';
import { useMutation, useQueryClient } from 'react-query'
import api from '../../services'
type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

type CreateTweet = {
  message: string
}

const NewPost = () => {
  const navigation = useNavigation<homeScreenProp>();
  const [text, setText] = useState('')
  
  const newPost = {
    "icon_name": "garage",
    "icon_lib": "material-icons-outlined",
    "url": "https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
  } 
  const queryClient = useQueryClient()
  const tweetMutation = useMutation(async() => {
    const data = {
      ...newPost,
      name: text
    }
    return api.post('/categories', {
      ...newPost,
      name: text
    })
  },{
      onSuccess: () => {
        queryClient.invalidateQueries('posts')
        navigation.navigate('Home')
      },

      onError: (error) => {
      throw Error
    }
    }
  )

  const handleCreatePost = async () => {
    const data = {
      ...newPost,
      name: text
    }
    try {
      await api.post('/categories', data)
      navigation.navigate('Home')
    } catch(error) {
      throw error
    }

  }

  return (
    <>
      <S.Container>
        <S.Button onPress={() => /*handleCreatePost()*/tweetMutation.mutate()}>
          <S.Text>Post</S.Text>
        </S.Button>
        <S.Button onPress={() => navigation.navigate('Home')}>
          <S.Text>{"<"}</S.Text>
        </S.Button>
        <S.PostContainer>
          <S.Input 
            placeholder="O que está acontecendo?"
            value={text}
            onChangeText={setText}
        />
        </S.PostContainer>
      </S.Container>
    </>
  )
}

export default NewPost
