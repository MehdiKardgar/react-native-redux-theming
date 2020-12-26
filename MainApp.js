import React from 'react'

import {
  StatusBar,
} from 'react-native';

import Body from './components/body/Body';

import Header from './components/header/Header';

import { ThemeProvider } from 'styled-components/native'

import { useSelector } from 'react-redux'


const MainApp = () => {

  const theme = useSelector(state => state.theme)

  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="dark-content" />
        <Header />
        <Body />
      </ThemeProvider>
    </>
  )
}

export default MainApp
