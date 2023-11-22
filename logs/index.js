require('dotenv').config()
const express = require ('express')
const moment = require('moment')

const app = express()
app.use(express.json())

const { PORT } = process.env

const listaLogs = {}
let id = 1

app.post('/eventos', (req, res) => {
    const tipo = req.body.type
    const data = moment().format('MMMM Do YYYY, h:mm:ss a')
    const log = {tipo, data}
    listaLogs[id] = log
    id++
    res.status(201).send(log)
})

app.get('/logs', (req, res) => res.send(listaLogs))

app.listen(
    PORT, 
    () => console.log(`Logs: ${PORT}`)
  )