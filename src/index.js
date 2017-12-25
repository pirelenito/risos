// import post from './posts/Wed Jun 01 2016 21:32:44 GMT+0200 (CEST).json'
import posts from './posts'
import React from 'react'
import { render } from 'react-dom'
import FeedCard from './FeedCard'
// import Post from './Post'
import './style.css'

const Feed = ({ posts }) => (
  <div>
    {/* {posts.map(post => <Post url={post.link} title={post.title} content={post.description} />)} */}
    {posts.map(post => <FeedCard title={post.title} intro={post.intro} hero={post.hero} />)}
  </div>
)

render(<Feed posts={posts} />, document.getElementById('root'))
