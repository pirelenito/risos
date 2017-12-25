const fetchFeed = require('./fetchFeed')
const fs = require('fs')
const path = require('path')

fetchFeed('https://precisopedalar.com/feed')
  .observe(post =>
    fs.writeFileSync(
      path.join(__dirname, '../posts', `${post.date.toString()}.json`),
      JSON.stringify(post)
    )
  )
  .then(() => console.log('done'))
  .catch(err => console.log('error', err))
