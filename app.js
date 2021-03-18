require('dotenv').config()
const express = require('express')
const sequelize = require(`./db`)
const { Device } = require('./models')
const app = express()
const jsonParser = express.json()

app.post('/', jsonParser, function(req, res) {
    const { one, two } = req.body
    Device.create({ one, two }).then((device) => res.json({ result: true }))
})

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.get('/table', function(req, res) {
    Device.findAll().then((device) => res.json(device))
})

const start = async() => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server sterted on port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()



app.listen(3000)