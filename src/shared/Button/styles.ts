import styled from 'styled-components/native'



interface ButtonProps {
  width?: number | string
  height?: number
  type: 'contained' | 'outlined' | 'translucent' 
  disabled?: boolean
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  width: 300px;
  height: 300px;
  border-width: ${(props) => (props.type === 'outlined' ? '1px' : props.type === 'translucent' ? '2px' : 0)};
  border-radius: 300px;
  border-color: #1d428a;
  border: solid 6px #1d428a;
  display: flex;
  justify-content: center;
  align-items: center;
`

interface TextProps {
  type: 'contained' | 'outlined' | 'translucent' 
  fontSize?: number | string
  padding?: number | string
}

export const CustomText = styled.Text<TextProps>`
  color: #1d428a;
  font-size: 40px;
`

