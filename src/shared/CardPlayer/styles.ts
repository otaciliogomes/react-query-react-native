import styled from 'styled-components/native'
import { theme } from '../../theme'

export const Image = styled.Image`
    height: 120px;
    width: 120px;
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
    height: 160;
    width: 180px;
`

export const Container = styled.View`
    justify-content: flex-end;
    align-items: center;
    background-color: ${theme.colors.background};
    border: solid 2px ${theme.colors.background};
    border-radius: 10px;
    height: 220;
    width: 180px;
    z-index: -1;
    margin: 0px 6px;
`

export const Title = styled.Text`
    color: ${theme.colors.white};
    font-size: 16px;
    margin-left: 6px;
    font-weight: bold;
`

export const Name = styled.Text`
    color: ${theme.colors.white};
    font-size: 20px;
    margin-left: 6px;
    font-weight: bold;
`

export const Text = styled.Text`
    color: ${theme.colors.white};
    font-size: 16px;
    margin: 0px 0px 8px 6px;
`