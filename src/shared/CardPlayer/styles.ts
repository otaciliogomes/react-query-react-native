import styled from 'styled-components/native'
import { theme } from '../../theme'

export const Image = styled.Image`
    height: 80px;
    width: 80px;
    margin: 10px;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -40%;
    z-index: 99;
`

export const Content = styled.View<{color: string}>`
    justify-content: flex-end;
    align-items: flex-start;
    background-color: ${({ color }) => color};
    border: solid 2px ${({ color }) => color};
    border-radius: 10px;
    height: 150;
    width: 140px;
`

export const Container = styled.View`
    justify-content: flex-end;
    align-items: center;
    background-color: ${theme.colors.background};
    border: solid 2px ${theme.colors.background};
    border-radius: 10px;
    height: 200;
    width: 140px;
    z-index: -1;
`

export const Title = styled.Text`
    color: ${theme.colors.white};
    font-size: 16px;
    margin-left: 6px;
    font-weight: bold;
`

export const Text = styled.Text`
    color: ${theme.colors.white};
    font-size: 16px;
    margin: 0px 0px 8px 6px;
`