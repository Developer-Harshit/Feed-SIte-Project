const express = require('express')
const path = require('path')

const app = express()

const templatePath = path.join(__dirname, 'views')
const publicPath = path.join(__dirname, 'public')

app.set('views', templatePath)
app.set('view engine', 'ejs')

app.use(express.static(publicPath))
app.use(express.urlencoded({ extended: false }))

app.get('/', function(req, res) {
    res.render('index')
})

app.get('/feeds', function(req, res) {
    res.render('feeds')
})

app.get('/post', function(req, res) {
    res.render('post')
})


app.listen(2000)