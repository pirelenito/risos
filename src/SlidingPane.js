import React from 'react'
import { Motion, spring } from 'react-motion'

export default class extends React.Component {
  focus() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }

    // we can't try to focus if an animation is running
    this.timeoutId = setTimeout(() => {
      if (!this.props.expanded) return
      this.element.focus()
    }, 1000)
  }

  scrollToTop() {
    this.element.scrollTo({ top: 0 })
  }

  render() {
    const { expanded, children, width, height, background } = this.props
    return (
      <Motion style={{ left: spring(expanded ? 0 : width + 20) }}>
        {style => (
          <div
            tabIndex="0"
            ref={el => (this.element = el)}
            style={{
              top: 0,
              left: style.left,
              background: background,
              width: width,
              height: height,
              position: 'absolute',
              overflowY: 'scroll',
              overflowX: 'hidden',
            }}
          >
            {children}
          </div>
        )}
      </Motion>
    )
  }
}
