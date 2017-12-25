import React from 'react'
import { connect } from 'react-redux'
import FeedCard from './FeedCard'

const App = ({ posts }) => (
  <div>
    {/* {posts.map(post => <Post url={post.link} title={post.title} content={post.description} />)} */}
    {posts.map(post => (
      <FeedCard key={post.date} title={post.title} intro={post.intro} hero={post.hero} />
    ))}
  </div>
)

const mapStateToProps = state => state

export default connect(mapStateToProps)(App)
