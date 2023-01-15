const express = require('express')
const path = require('path')
const uuid = require('uuid')
const fs = require('fs')

const app = express()

const templatePath = path.join(__dirname, 'views')
const publicPath = path.join(__dirname, 'public')
const dataPath = path.join(__dirname, 'data', 'articles.json')

function addLineBreak(article){
    let myContant = article.contant
    myContant = myContant.split('\r\n')
    article.contant = myContant
}

function accessData(){
    const fileData = fs.readFileSync(dataPath)
    const storedArticles = JSON.parse(fileData)
    return storedArticles
}

app.set('views', templatePath)
app.set('view engine', 'ejs')

app.use(express.static(publicPath))
app.use(express.urlencoded({ extended: false }))

app.get('/', function(req, res) {
    res.render('index')
})

app.get('/feeds', function(req, res) {

    const storedArticles = accessData()

    res.render('feeds',{articles : storedArticles,addLine : addLineBreak})
})




app.get('/feeds/:id',function(req,res){
    const myId = req.params.id

    const storedArticles = accessData()

    
    for(article of storedArticles){
        if(myId == article.id){
            const accessById = article
            console.log(accessById)
            addLineBreak(accessById)
            res.render('myfeed.ejs',{myArticle: accessById})
            break
        }
    }
    res.render('feeds.ejs')

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
    
    const storedArticles = accessData()

    storedArticles.push(article)

    fs.writeFileSync(dataPath, JSON.stringify(storedArticles))

    console.log(typeof article, typeof storedArticles)
    res.redirect('/confirm')
})



app.listen(2000)