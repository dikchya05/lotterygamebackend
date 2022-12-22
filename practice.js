const express = require('express')
const app = express()
const port = 3001

app.get('/abd', (req, res) => {
    console.log(req.query.order)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})