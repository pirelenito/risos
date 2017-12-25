import React from 'react'
import { connect } from 'react-redux'
import FeedCard from './FeedCard'
import Post from './Post'
import store from './store'

const App = ({ posts, highlighted, selected }) => (
  <div>
    {selected ? (
      <Post url={selected.link} title={selected.title} content={selected.description} />
    ) : (
      posts.map(post => (
        <FeedCard
          highlighted={post === highlighted}
          key={post.date}
          title={post.title}
          intro={post.intro}
          hero={post.hero}
        />
      ))
    )}
  </div>
)

const mapStateToProps = state => ({
  posts: state.posts,
  highlighted: store.getHighlighted(state),
  selected: store.getSelected(state),
})

export default connect(mapStateToProps)(App)
