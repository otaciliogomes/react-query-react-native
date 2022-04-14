import { Dimensions } from 'react-native'
import styled from 'styled-components/native'


const { width } = Dimensions.get('window')

export const Container = styled.View`
  background-color: #FFF;
  flex: 1;
  justify-content: center;
  align-items: center;
`
export const Content = styled.View`
  flex: 1;
`
export const ContainerPage = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #FFF;
  /* width: ${width}; */
`

export const ContainerBtn = styled.View`
    flex: 1;
    width: ${width};
    background-color: #FFF;
    justify-content: center;
    align-items: center;
`