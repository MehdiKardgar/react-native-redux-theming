import { lightTheme , darkTheme } from '../Theme/Theme'

import { LIGHT_THEME , DARK_THEME } from './Actions';

const initialState = {
  theme: { ...lightTheme }
}

let newState = {}

const ThemeReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case LIGHT_THEME:
      newState = {
        ...state,
        theme: { ...lightTheme }
      }
      return newState
    case DARK_THEME :
      newState = {
        ...state,
        theme: { ...darkTheme }
      }
      return newState;
    default:
      return state
  }
}

export default ThemeReducer