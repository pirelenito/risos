import { createStore, bindActionCreators } from 'redux'
import posts from './posts'

const HIGHLIGHT_NEXT = 'HIGHLIGHT_NEXT'
const HIGHLIGHT_PREVIOUS = 'HIGHLIGHT_PREVIOUS'
const EXPAND = 'EXPAND'
const COLLAPSE = 'COLLAPSE'
const RESIZE_WINDOW = 'RESIZE_WINDOW'

const initialState = {
  posts,
  highlightedOffset: 0,
  expanded: false,
  windowWidth: window.innerWidth,
  windowHeight: window.innerHeight,
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case HIGHLIGHT_NEXT:
      return {
        ...state,
        highlightedOffset: state.expanded
          ? state.highlightedOffset
          : Math.min(state.highlightedOffset + 1, state.posts.length - 1),
      }
    case HIGHLIGHT_PREVIOUS:
      return {
        ...state,
        highlightedOffset: state.expanded
          ? state.highlightedOffset
          : Math.max(state.highlightedOffset - 1, 0),
      }
    case EXPAND:
      return {
        ...state,
        expanded: true,
      }
    case COLLAPSE:
      return {
        ...state,
        expanded: false,
      }
    case RESIZE_WINDOW:
      return {
        ...state,
        windowWidth: action.payload.width,
        windowHeight: action.payload.height,
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
      selectHighlighted: () => ({ type: EXPAND }),
      cancelSelection: () => ({ type: COLLAPSE }),
      resizeWindow: dimensions => ({ type: RESIZE_WINDOW, payload: dimensions }),
    },
    store.dispatch
  ),
  getHighlighted: state => state.posts[state.highlightedOffset],
}
