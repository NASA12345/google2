const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/info', (req, res) => res.send("{ serverName: 'google2', serverVersion: '0.1.0' }"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
