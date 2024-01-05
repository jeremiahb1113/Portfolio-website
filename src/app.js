
const express = require('express')
const cors = require('cors')
const path = require('path');
const { default: axios } = require('axios');
require("dotenv").config();


//entry point of the application
const app = express();

//register the view engine
app.set('view engine', 'ejs');

//middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cors());
app.listen(3000);



app.get('/', (req, res) => {
    
    res.render('index')

    })

app.get('/about', (req, res) =>{
    res.render('about')
})

app.get('/project-page', (req, res) =>{
    res.render('project-page')
})
app.get('/contact', (req, res) => {
     
     res.render('contact');

    
})

//404 page
app.use((req, res) => {
    res.status(404).render('404')
})