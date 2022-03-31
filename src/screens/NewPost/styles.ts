import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

const { width } = Dimensions.get('window')

export const Container = styled.View`
    flex: 1;
    width: ${width};
    background-color: #EFEFF4;
    margin-top: 60px;
    margin-left: 10px;
`

export const Content = styled.View`
    flex: 1;
`

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#abb7bf',
    selectionColor: '#1DA1F2',
  })`
    color: #FFF;
    flex-grow: 1;
    font-size: 20px;
    height: 100px;
    width: 100%;
    margin: 20px;
  `;
  

export const Button = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 35px;
    border-radius: 35px;
    background-color: #1DA1F2;
`

export const Text = styled.Text`
    color: #FFF;
    text-align: center;
    font-size: 18px;
`
export const PostContainer = styled.View`
    flex: 1;
    background-color: #000;
    width: 90%;
    padding: 10px;
    margin: 20px;
    border-radius: 10px;
    justify-content: center;
    align-items: flex-start;
`