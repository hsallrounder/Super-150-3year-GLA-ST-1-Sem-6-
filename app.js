const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 5000
const path = require('path')
const article = require('./models/article')
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, "public", "JS")))
mongoose.connect('mongodb://localhost:27017/articlesDB').then(() => console.log("Connected Successfully")).catch((err) => console.log('error occured'))
app.use(express.urlencoded({extended:true}));
app.get('/', (req, res) => {
    res.render('index');
})

app.get('/articles/new', (req, res) => {
    res.render('new_article')
})

app.post('/articles/this-is-a-new-article',(req,res) => {
    var data = new article(req.body);
    data.save().then(item => res.send('item has been added')).catch((err) => console.log(err));
})

app.listen(port, () => {
    console.log("Port running")
})
