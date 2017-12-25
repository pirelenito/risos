import React from 'react'
import { connect } from 'react-redux'
import FeedCard from './FeedCard'
import store from './store'

const App = ({ posts, highlighted }) => (
  <div>
    {/* {posts.map(post => <Post url={post.link} title={post.title} content={post.description} />)} */}
    {posts.map(post => (
      <FeedCard
        highlighted={post === highlighted}
        key={post.date}
        title={post.title}
        intro={post.intro}
        hero={post.hero}
      />
    ))}
  </div>
)

const mapStateToProps = state => ({ posts: state.posts, highlighted: store.getHighlighted(state) })

export default connect(mapStateToProps)(App)
