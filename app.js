const express = require('express')

const app = express()

const path = require('path')

const templatePath = path.join(__dirname, 'views')

app.set('views', templatePath)

app.set('view engine', 'ejs')

const publicPath = path.join(__dirname, 'public')

app.use(express.static(publicPath))

app.use(express.urlencoded({ extended: false }))

app.get('/feed', function(req, res) {
    const filePath = path.join(__dirname, 'views', 'feeds.html')
        // res.sendFile(filePath)
    res.render('feeds')
})

app.listen(2005)