// require('/src/db/mongoose')
const express = require('express')
const path = require('path')
const ejs = require('ejs')
const homeRouter = require('./src/routers/home')
require('dotenv').config();
const publicPath = path.join(__dirname, '/public')
const viewsPath = path.join(__dirname, '/public/templates')
const partialsPath = path.join(__dirname, '/templates/partials')
// const User = require('/src/models/user')
const app = express()

app.set('view engine', 'ejs')
app.set('views', viewsPath)

app.use(homeRouter)

app.listen(process.env.PORT, () => {
    console.log("Server is up on port " + process.env.PORT)
})