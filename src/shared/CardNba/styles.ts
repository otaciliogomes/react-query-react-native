import styled from 'styled-components/native'
import {theme} from '../../theme'

export const Image = styled.Image`
    border-radius: 50px;
    height: 50px;
    width: 50px;
    margin: 10px;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.white};
`

export const Container = styled.View`
    justify-content: flex-start;
    align-items: center;
    background-color: ${theme.colors.red};
    border: solid 2px ${theme.colors.white};
    border-radius: 10px;
    height: 140px;
    width: 140px;

`
export const Title = styled.Text`
    color: ${theme.colors.white};
    font-size: 18px;
`