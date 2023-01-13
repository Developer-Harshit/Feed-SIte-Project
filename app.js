const express = require('express')
const path = require('path')
const uuid = require('uuid')
const fs = require('fs')

const app = express()

const templatePath = path.join(__dirname, 'views')
const publicPath = path.join(__dirname, 'public')
const dataPath = path.join(__dirname, 'data', 'articles.json')

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
app.get('/confirm', function(req, res) {
    res.render('confirm')
})
app.post('/post', function(req, res) {
    const article = req.body
    article.id = uuid.v4()

    const fileData = fs.readFileSync(dataPath)
    const storedArticles = JSON.parse(fileData)

    storedArticles.push(article)

    fs.writeFileSync(dataPath, JSON.stringify(storedArticles))

    console.log(typeof article, typeof storedArticles)
    res.redirect('/confirm')
})



app.listen(2000)