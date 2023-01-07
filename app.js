const express = require('express')

const app = express()

const path = require('path')

const templatePath = path.join(__dirname, 'views')

app.set('views', templatePath)

app.set('view engine', 'ejs')

app.use(express.static('myImg'))

app.use(express.urlencoded({ extended: false }))

app.get('/feed', function(req, res) {
    res.render('feeds')
})

app.listen(2005)