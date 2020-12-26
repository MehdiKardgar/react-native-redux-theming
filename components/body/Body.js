import React from 'react';

import { useSelector , useDispatch } from 'react-redux'

import { LIGHT_THEME ,} from '../redux/Actions';

import { View , Text , StyleSheet , Button } from 'react-native';

import SwitchSelector from "react-native-switch-selector";

const options = [
  { label: "Light Theme", value: "light" },
  { label: "Dark Theme", value: "dark" },
];

const Body = () => {

  const theme = useSelector(state => state.theme)

  const textColor = () => {
    return {
      color : theme.TEXT_COLOR,
      fontSize : 20,
      paddingBottom : 40,
    }
  }

  const dispatch = useDispatch()

  const changeTheme = (value) => {
    console.log(value)
    dispatch({
      type : value
    })
    // useDispatch({
    //   type : value
    // })
  }

  // console.log(theme)

  return (
    <View style={styles.container}>
      <Text style={textColor()}>Theme : {theme.mode}</Text>
      <SwitchSelector
        initial={0}
        onPress={value => changeTheme(value)}
        textColor={theme.TEXT_COLOR}
        selectedColor={theme.TEXT_COLOR}
        buttonColor={theme.BACKGROUND_COLOR}
        borderColor='black'
        hasPadding={true}
        options={options}
        height={70}
        fontSize={20}
        // style={styles.switch}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    marginHorizontal : 30,
  },
  switch : {
    height : 100,
    backgroundColor : 'yellow'
  }
})

export default Body;
