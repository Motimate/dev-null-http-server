const express = require('express')
const app = express()

app.all('/*', function (req, res) {
  res.end()
})

app.listen(process.env.PORT)