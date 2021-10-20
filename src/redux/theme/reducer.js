import { themeActionTypes } from './action'

const themeInitialState = {
  value: 'light',
}

export default function reducer(state = themeInitialState, action) {
  switch (action.type) {
    case themeActionTypes.CHANGE_THEME:
      return Object.assign({}, state, {
        value: action.value,
      })
    default:
      return state
  }
}