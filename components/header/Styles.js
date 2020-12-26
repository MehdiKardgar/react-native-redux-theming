import styled from 'styled-components/native'

export const Container = styled.View`
  background-color : ${props => props.theme.BACKGROUND_COLOR};
  padding : 40px;
  display : flex;
  flex-direction : row;
  justify-content : center;
`

export const TextWrapper = styled.Text`
  color : ${props => props.theme.TEXT_COLOR};
  font-size:25px;
`