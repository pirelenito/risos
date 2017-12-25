import React from 'react'
import { connect } from 'react-redux'
import FeedCard from './FeedCard'
import Post from './Post'
import store from './store'
import SlidingPane from './SlidingPane'

class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.highlighted !== this.props.highlighted) {
      this.postElement.scrollToTop()
    }

    if (!prevProps.expanded && this.props.expanded) {
      this.postElement.focus()
    }

    if (prevProps.expanded && !this.props.expanded) {
      this.feedElement.focus()
    }
  }

  render() {
    const { posts, highlighted, expanded, windowWidth, windowHeight } = this.props

    return (
      <div
        style={{
          width: windowWidth,
          height: windowHeight,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <SlidingPane
          ref={el => (this.feedElement = el)}
          key="feed"
          background="#1B2B34"
          expanded
          width={windowWidth}
          height={windowHeight}
        >
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
          ref={el => (this.postElement = el)}
          key="post"
          background="#16232a"
          expanded={expanded}
          width={windowWidth}
          height={windowHeight}
        >
          <Post
            url={highlighted.link}
            title={highlighted.title}
            content={highlighted.description}
          />
        </SlidingPane>,
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  highlighted: store.getHighlighted(state),
  expanded: state.expanded,
  windowWidth: state.windowWidth,
  windowHeight: state.windowHeight,
})

export default connect(mapStateToProps)(App)
