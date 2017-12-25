import { createStore } from 'redux'
import posts from './posts'

const initialState = {
  posts,
}

const rootReducer = (state = initialState, action) => {
  switch (action) {
    default:
      return state
  }
}

export default createStore(rootReducer)
