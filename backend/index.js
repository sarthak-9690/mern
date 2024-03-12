const express = require('express')
const connectToMongo = require('./database')
var cors = require('cors')

connectToMongo()

const app = express()
app.use(cors())
const port = 8080
app.use(express.json())
app.use('/auth', require('./routes/auth'))

app.listen(port, () => {
    console.log(`Connected to port ${port}`)
})