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

export const PostContainer = styled.View`
    flex: 1;
    background-color: #000;
    width: 90%;
    height: auto;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    justify-content: center;
    align-items: flex-start;
`
export const Text = styled.Text`
    color: #FFF;
    text-align: center;
    font-size: 18px;
`

export const Row = styled.View`
    flex-direction: column;
`

export const TitleContainer = styled.View`
    background-color: #1DA1F2;
    width: 90%;
    height: auto;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    justify-content: center;
    align-items: flex-start;
`
export const Title = styled.Text`
    color: #000;
    text-align: center;
    font-size: 26px;
    font-weight: bold;
`

export const Button = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 35px;
    border-radius: 35px;
    background-color: #1DA1F2;
`
export const ImageState = styled.Image`
    width: 100%;
    height: 300px;
`