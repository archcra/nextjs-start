import { createStore, applyMiddleware, combineReducers } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import theme from './theme/reducer'

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const combinedReducer = combineReducers({
  theme,
})

const reducer = (state, action) => {
  console.log(' in reducer ...')
  if (action.type === HYDRATE) {
    console.log(' in hydrate ....+++++++++++++++')

    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    if (state.theme.value) nextState.theme.value = state.theme.value // preserve theme value on client side navigation

    return nextState
  } else {
    return combinedReducer(state, action)
  }
}

export default createStore(reducer, bindMiddleware([thunkMiddleware]))
