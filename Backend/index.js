const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')    //เรียกใช้ mongoose

const PORT = 8000
const routes = require('./routes')


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/fancyapp', {
     useNewUrlParser: true
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ type: '*/*' }))
routes(app)

app.listen(PORT, () => {
    console.log('ready server on http://localhost:' + PORT)
})