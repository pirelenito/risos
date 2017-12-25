import { shell } from 'electron'
import React from 'react'

export default ({ content, title, url }) => (
  <div className="post">
    <a
      className="titleLink"
      href={url}
      onClick={e => {
        e.preventDefault()
        shell.openExternal(url)
      }}
    >
      <h1>{title}</h1>
    </a>
    <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
  </div>
)
