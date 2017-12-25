import React from 'react'

const styles = {
  box: {
    maxWidth: 700,
    margin: '38px auto',
    backgroundColor: 'rgb(66, 66, 66)',
    color: 'rgb(255, 255, 255)',
    borderRadius: 2,
    boxShadow:
      'rgba(0, 0, 0, 0.2) 0px 1px 5px 0px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px',
  },
  hero: {
    backgroundColor: 'rgb(21, 21, 21)',
    display: 'block',
    width: '100%',
  },
  content: {
    padding: 16,
    lineHeight: 1.58,
  },
  title: {
    margin: 0,
    fontSize: 21,
  },
}

export default ({ title, intro, hero }) => (
  <div style={styles.box}>
    <img style={styles.hero} src={hero} />
    <div style={styles.content}>
      <h1 style={styles.title}>{title}</h1>
      {intro && intro.trim().length > 0 && <p>{intro}</p>}
    </div>
  </div>
)
