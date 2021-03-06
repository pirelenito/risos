const cheerio = require('cheerio')

/**
 * Fixtures to develop the UI
 */
export default [
  require('./Fri Dec 22 2017 04:39:51 GMT+0100 (CET).json'),
  require('./Fri Dec 22 2017 22:43:51 GMT+0100 (CET).json'),
  require('./Fri Jun 23 2017 02:09:34 GMT+0200 (CEST).json'),
  require('./Fri Oct 21 2016 18:56:12 GMT+0200 (CEST).json'),
  require('./Mon Dec 04 2017 22:06:33 GMT+0100 (CET).json'),
  require('./Mon Dec 11 2017 23:40:29 GMT+0100 (CET).json'),
  require('./Mon May 16 2016 04:09:03 GMT+0200 (CEST).json'),
  require('./Mon Nov 28 2016 20:12:42 GMT+0100 (CET).json'),
  require('./Sun May 22 2016 17:08:57 GMT+0200 (CEST).json'),
  require('./Thu Dec 07 2017 00:05:40 GMT+0100 (CET).json'),
  require('./Thu Dec 07 2017 20:33:30 GMT+0100 (CET).json'),
  require('./Thu Dec 21 2017 18:44:15 GMT+0100 (CET).json'),
  require('./Thu Jul 07 2016 02:11:32 GMT+0200 (CEST).json'),
  require('./Thu Nov 30 2017 19:08:12 GMT+0100 (CET).json'),
  require('./Tue Dec 05 2017 21:55:54 GMT+0100 (CET).json'),
  require('./Tue Dec 12 2017 21:12:47 GMT+0100 (CET).json'),
  require('./Tue Dec 12 2017 22:54:20 GMT+0100 (CET).json'),
  require('./Tue Oct 25 2016 16:09:06 GMT+0200 (CEST).json'),
  require('./Wed Dec 06 2017 00:28:13 GMT+0100 (CET).json'),
  require('./Wed Dec 06 2017 19:02:51 GMT+0100 (CET).json'),
  require('./Wed Feb 22 2017 18:24:04 GMT+0100 (CET).json'),
  require('./Wed Jun 01 2016 21:32:44 GMT+0200 (CEST).json'),
  require('./Wed Nov 29 2017 19:48:39 GMT+0100 (CET).json'),
  require('./Wed Nov 29 2017 21:43:31 GMT+0100 (CET).json'),
  require('./Wed Sep 06 2017 11:25:31 GMT+0200 (CEST).json'),
].map(post => {
  const $ = cheerio.load(post.description)
  const hero = $('img')
    .first()
    .attr('src')

  const intro = $('p')
    .first()
    .text()

  console.log(hero)

  return {
    ...post,
    hero,
    intro,
  }
})
