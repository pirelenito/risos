import React from 'react'
import { Motion, spring } from 'react-motion'

export default class extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.expanded && this.props.expanded) {
      this.element.focus()
    }
  }

  render() {
    const { expanded, children, width, height, background } = this.props
    return (
      <Motion
        defaultStyle={{ left: expanded ? 0 : width + 20 }}
        style={{ left: spring(expanded ? 0 : width + 20, { stiffness: 150, damping: 15 }) }}
      >
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
