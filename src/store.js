import { createStore, bindActionCreators } from 'redux'
import posts from './posts'

const HIGHLIGHT_NEXT = 'HIGHLIGHT_NEXT'
const HIGHLIGHT_PREVIOUS = 'HIGHLIGHT_PREVIOUS'

const initialState = {
  posts,
  highlightedOffset: 0,
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case HIGHLIGHT_NEXT:
      return {
        ...state,
        highlightedOffset: Math.min(state.highlightedOffset + 1, state.posts.length - 1),
      }
    case HIGHLIGHT_PREVIOUS:
      return {
        ...state,
        highlightedOffset: Math.max(state.highlightedOffset - 1, 0),
      }
    default:
      return state
  }
}

const store = createStore(rootReducer)

export default {
  ...store,
  ...bindActionCreators(
    {
      highlightNext: () => ({ type: HIGHLIGHT_NEXT }),
      highlightPrevious: () => ({ type: HIGHLIGHT_PREVIOUS }),
    },
    store.dispatch
  ),
  getHighlighted: state => state.posts[state.highlightedOffset],
}
