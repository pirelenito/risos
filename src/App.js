import React from 'react'
import { connect } from 'react-redux'
import FeedCard from './FeedCard'
import Post from './Post'
import store from './store'
import SlidingPane from './SlidingPane'

const App = ({ posts, highlighted, expanded, windowWidth, windowHeight }) => (
  <div
    style={{
      top: 0,
      left: 0,
      width: windowWidth,
      height: windowHeight,
      position: 'absolute',
      overflow: 'hidden',
    }}
  >
    <SlidingPane key="feed" background="#1B2B34" expanded width={windowWidth} height={windowHeight}>
      {posts.map(post => (
        <FeedCard
          highlighted={post === highlighted}
          key={post.date}
          title={post.title}
          intro={post.intro}
          hero={post.hero}
        />
      ))}
    </SlidingPane>
    <SlidingPane
      key="post"
      background="#16232a"
      expanded={expanded}
      width={windowWidth}
      height={windowHeight}
    >
      <Post url={highlighted.link} title={highlighted.title} content={highlighted.description} />
    </SlidingPane>
  </div>
)

const mapStateToProps = state => ({
  posts: state.posts,
  highlighted: store.getHighlighted(state),
  expanded: state.expanded,
  windowWidth: state.windowWidth,
  windowHeight: state.windowHeight,
})

export default connect(mapStateToProps)(App)
