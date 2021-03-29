const express = require('express')
const app = express()

const ongkir = require('./ongkir')

app.use(ongkir)

if (require.main === module) {
  const port = 3001
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}

module.exports = app
