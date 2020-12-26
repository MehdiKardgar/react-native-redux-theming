// rafce


//imr
import React from 'react'

import { useSelector } from 'react-redux';

// imrn
import { View , Text , StyleSheet } from 'react-native'

import { Container , TextWrapper } from './Styles';

const Header = () => {

  // const theme = useSelector(state => state.theme)

  return (
    <Container>
      <TextWrapper>Hello Styled Components</TextWrapper>
    </Container>
    // <View style={styles.container}>
    //   <View style={styles.header}>
    //     <Text style={styles.myText}>Hello Styled Components</Text>
    //   </View>
    // </View>
  )
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : 'black',
    height : 100,
  },
  header : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
  myText : {
    color : 'white',
    fontSize : 25,
  }
})

export default Header
