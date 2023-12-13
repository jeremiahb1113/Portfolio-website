const express = require('express')
const path = require('path')

//entry point of the application
const app = express();

//register the view engine
app.set('view engine', 'ejs');

//middleware
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000)



app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) =>{
    res.render('about')
})

//404 page
app.use((req, res) => {
    res.status(404).render('404')
})